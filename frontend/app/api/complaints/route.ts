import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import type { Complaint } from "@/types/complaint"

export async function POST(request: Request) {
  try {
    const complaint = (await request.json()) as Omit<Complaint, "id">

    // Connect to MongoDB
    const { db } = await connectToDatabase()

    // Insert the complaint into the database
    const result = await db.collection("complaints").insertOne({
      ...complaint,
      dateSubmitted: new Date(),
      lastUpdated: new Date(),
      status: "Pending",
      upvotes: 0,
      comments: [],
    })

    // Return the created complaint with the generated ID
    return NextResponse.json(
      {
        id: result.insertedId,
        ...complaint,
        success: true,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating complaint:", error)
    return NextResponse.json({ error: "Failed to create complaint" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    // Connect to MongoDB
    const { db } = await connectToDatabase()

    // Get URL parameters
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const category = searchParams.get("category")
    const location = searchParams.get("location")

    // Build query based on parameters
    const query: Record<string, any> = {}
    if (status && status !== "all") query.status = status
    if (category && category !== "all-categories") query.category = category
    if (location && location !== "all-locations") query.location = location

    // Get complaints from database
    const complaints = await db.collection("complaints").find(query).sort({ dateSubmitted: -1 }).toArray()

    return NextResponse.json(complaints)
  } catch (error) {
    console.error("Error fetching complaints:", error)
    return NextResponse.json({ error: "Failed to fetch complaints" }, { status: 500 })
  }
}


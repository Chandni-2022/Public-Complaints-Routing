import type { Complaint } from "@/types/complaint"

// Generate 500 sample complaints
const generateComplaints = (): Complaint[] => {
  const locations = ["East Zone", "West Zone", "North Zone", "South Zone", "Central Zone"]
  const categories = [
    "Electricity",
    "Water Supply",
    "Roads",
    "Sanitation",
    "Public Transport",
    "Garbage",
    "Street Lights",
  ]
  const departments = ["Water Board", "Electricity Board", "Municipal", "Transport", "Public Works", "Sanitation"]
  const criticalities = ["Low", "Medium", "High"] as const
  const statuses = ["Pending", "In Progress", "Resolved"] as const

  return Array.from({ length: 500 }, (_, i) => {
    const id = i + 1
    const status = statuses[Math.floor(Math.random() * statuses.length)]

    return {
      id,
      name: `Complaint ${id}`,
      description: "This is a description for com...",
      image: "/placeholder.svg",
      location: locations[Math.floor(Math.random() * locations.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      criticality: criticalities[Math.floor(Math.random() * criticalities.length)],
      department: departments[Math.floor(Math.random() * departments.length)],
      status,
    }
  })
}

export const complaintsData: Complaint[] = generateComplaints()

// Statistics
export const complaintStats = {
  total: 500,
  pending: complaintsData.filter((c) => c.status === "Pending").length,
  inProgress: complaintsData.filter((c) => c.status === "In Progress").length,
  resolved: complaintsData.filter((c) => c.status === "Resolved").length,
}


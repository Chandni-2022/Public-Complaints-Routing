import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import type { Complaint } from "@/types/complaint"

interface ComplaintTableProps {
  complaints: Complaint[]
}

export function ComplaintTable({ complaints }: ComplaintTableProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader className="bg-blue-600 text-white">
          <TableRow>
            <TableHead className="text-white font-medium">SR. NO.</TableHead>
            <TableHead className="text-white font-medium">NAME</TableHead>
            <TableHead className="text-white font-medium">DESCRIPTION</TableHead>
            <TableHead className="text-white font-medium">IMAGE</TableHead>
            <TableHead className="text-white font-medium">LOCATION</TableHead>
            <TableHead className="text-white font-medium">CATEGORY</TableHead>
            <TableHead className="text-white font-medium">CRITICALITY</TableHead>
            <TableHead className="text-white font-medium">DEPARTMENT</TableHead>
            <TableHead className="text-white font-medium">STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {complaints.map((complaint) => (
            <TableRow key={complaint.id}>
              <TableCell>{complaint.id}</TableCell>
              <TableCell>{complaint.name}</TableCell>
              <TableCell>{complaint.description}</TableCell>
              <TableCell>
                <div className="h-12 w-12 bg-gray-100 rounded">
                  <Image
                    src={complaint.image || "/placeholder.svg?height=48&width=48"}
                    alt="Complaint"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </TableCell>
              <TableCell>{complaint.location}</TableCell>
              <TableCell>{complaint.category}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    complaint.criticality === "Low"
                      ? "bg-green-100 text-green-800"
                      : complaint.criticality === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {complaint.criticality}
                </span>
              </TableCell>
              <TableCell>{complaint.department}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    complaint.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : complaint.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                  }`}
                >
                  {complaint.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


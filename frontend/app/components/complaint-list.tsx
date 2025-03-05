import Image from "next/image"
import type { Complaint } from "@/types/complaint"

interface ComplaintListProps {
  complaints: Complaint[]
}

export function ComplaintList({ complaints }: ComplaintListProps) {
  return (
    <div className="space-y-4">
      {complaints.map((complaint) => (
        <div key={complaint.id} className="border rounded-lg p-4 flex items-center gap-4">
          <div className="h-16 w-16 bg-gray-100 rounded flex-shrink-0">
            <Image
              src={complaint.image || "/placeholder.svg?height=64&width=64"}
              alt="Complaint"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between">
              <h3 className="font-semibold">{complaint.name}</h3>
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
            </div>
            <p className="text-sm text-gray-600">{complaint.description}</p>
            <div className="flex gap-4 mt-2 text-sm">
              <span>{complaint.location}</span>
              <span>•</span>
              <span>{complaint.category}</span>
              <span>•</span>
              <span>{complaint.department}</span>
              <span>•</span>
              <span
                className={`${
                  complaint.criticality === "Low"
                    ? "text-green-600"
                    : complaint.criticality === "Medium"
                      ? "text-yellow-600"
                      : "text-red-600"
                }`}
              >
                {complaint.criticality} Priority
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


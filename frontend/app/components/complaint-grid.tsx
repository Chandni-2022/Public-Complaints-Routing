import Image from "next/image"
import type { Complaint } from "@/types/complaint"

interface ComplaintGridProps {
  complaints: Complaint[]
}

export function ComplaintGrid({ complaints }: ComplaintGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {complaints.map((complaint) => (
        <div key={complaint.id} className="border rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-100">
            <Image
              src={complaint.image || "/placeholder.svg?height=200&width=400"}
              alt="Complaint"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
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
            <p className="text-sm text-gray-600 mb-3">{complaint.description}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Location:</span>
                <p>{complaint.location}</p>
              </div>
              <div>
                <span className="text-gray-500">Category:</span>
                <p>{complaint.category}</p>
              </div>
              <div>
                <span className="text-gray-500">Department:</span>
                <p>{complaint.department}</p>
              </div>
              <div>
                <span className="text-gray-500">Criticality:</span>
                <p
                  className={`${
                    complaint.criticality === "Low"
                      ? "text-green-600"
                      : complaint.criticality === "Medium"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {complaint.criticality}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


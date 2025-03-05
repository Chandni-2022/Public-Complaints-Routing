import { AlertTriangle, Clock, CheckCircle, FileText } from "lucide-react"

interface ComplaintStatsProps {
  total: number
  pending: number
  inProgress: number
  resolved: number
}

export function ComplaintStats({ total, pending, inProgress, resolved }: ComplaintStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-blue-600 text-white p-6 rounded-lg">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-medium mb-2">Total Complaints</h3>
            <p className="text-4xl font-bold">{total}</p>
            <p className="text-sm mt-1">As per available data</p>
          </div>
          <FileText className="h-6 w-6" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-medium mb-2">Pending</h3>
            <p className="text-4xl font-bold">{pending}</p>
            <p className="text-sm mt-1 text-gray-500">Awaiting action</p>
          </div>
          <AlertTriangle className="h-6 w-6 text-amber-500" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-medium mb-2">In Progress</h3>
            <p className="text-4xl font-bold">{inProgress}</p>
            <p className="text-sm mt-1 text-gray-500">Currently being addressed</p>
          </div>
          <Clock className="h-6 w-6 text-blue-500" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-medium mb-2">Resolved</h3>
            <p className="text-4xl font-bold">{resolved}</p>
            <p className="text-sm mt-1 text-gray-500">Successfully completed</p>
          </div>
          <CheckCircle className="h-6 w-6 text-green-500" />
        </div>
      </div>
    </div>
  )
}


// export interface Complaint {
//     id: number
//     name: string
//     description: string
//     image: string
//     location: string
//     category: string
//     criticality: "Low" | "Medium" | "High"
//     department: string
//     status: "Pending" | "In Progress" | "Resolved"
//   }
  
export interface Complaint {
  id: number
  title: string
  department: string
  name: string
  description: string
  image: string
  category: string
  location: string
  criticality: "Low" | "Medium" | "High"
  status: "Pending" | "In Progress" | "Resolved"
  priority: "High" | "Medium" | "Low"
  dateSubmitted: string
  lastUpdated: string
  contactInfo: {
    name: string
    email: string
    phone?: string
  }
  images?: string[]
  upvotes: number
  comments: {
    id: number
    text: string
    author: string
    date: string
  }[]
}


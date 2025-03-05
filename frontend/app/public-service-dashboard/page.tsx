// "use client"

// import type React from "react"
// import Image from "next/image"
// import { useState, useEffect } from "react"

// interface Complaint {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   department?: string;
// }

// export default function PublicServiceDashboard() {
//   const [location, setLocation] = useState("")
//   const [showComplaintForm, setShowComplaintForm] = useState(false)
//   const [complaintName, setComplaintName] = useState("")
//   const [complaintDescription, setComplaintDescription] = useState("")
//   const [complaintImage, setComplaintImage] = useState<File | null>(null)
//   const [department, setDepartment] = useState("")
//   const [reportedProblems, setReportedProblems] = useState<Complaint[]>([] /* Initialize as empty array initially */);
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const departmentEmailMap: Record<string, string> = {
//     "Roads & Infrastructure": "roads@example.gov",
//     "Drainage & Water": "drainage@example.gov",
//     "Street Lighting": "lighting@example.gov",
//     "Waste Management": "waste@example.gov",
//     "Electricity": "electricity@example.gov",
//     "Other": "other@example.gov",
//   }

//   // Load from localStorage in useEffect, which runs on the client
//   useEffect(() => {
//     const storedProblems = localStorage.getItem("reportedComplaints");
//     if (storedProblems) {
//       setReportedProblems(JSON.parse(storedProblems));
//     } else {
//       // If nothing in localStorage, use the initial default data
//       setReportedProblems([
//         {
//           id: 1,
//           name: "Potholes on Bhulabhai Desai Road",
//           description: "Big potholes are there on the road",
//           image: "/placeholder.svg?height=80&width=150",
//         },
//         {
//           id: 2,
//           name: "Improper drainage",
//           description: "The drainage system at PCMC is not proper",
//           image: "/placeholder.svg?height=80&width=150",
//         },
//         {
//           id: 3,
//           name: "Water Logging",
//           description: "Water logging due to heavy rains in Akurdi Railway Tunnel",
//           image: "/placeholder.svg?height=80&width=150",
//         },
//         {
//           id: 4,
//           name: "Light not on",
//           description: "The street light is off",
//           image: "/placeholder.svg?height=80&width=150",
//         },
//         {
//           id: 5,
//           name: "Garbage in Akurdi",
//           description: "Garbage in Akurdi area",
//           image: "/placeholder.svg?height=80&width=150",
//         },
//         {
//           id: 6,
//           name: "Potholes in area",
//           description: "Big potholes in Akurdi area",
//           image: "/placeholder.svg?height=80&width=150",
//         },
//         {
//           id: 7,
//           name: "Chandni",
//           description: "Damaged Road",
//           image: "/placeholder.svg?height=80&width=150",
//         },
//         {
//           id: 8,
//           name: "Chandni",
//           description: "Damaged Road",
//           image: "/placeholder.svg?height=80&width=150",
//         },
//         {
//           id: 9,
//           name: "Electricity cutoffs",
//           description: "very uduku cant tattukofy",
//           image: "/placeholder.svg?height=80&width=150",
//         },
//       ]);
//     }
//   }, []); // Empty dependency array means this effect runs only once after initial render

//   useEffect(() => {
//     localStorage.setItem("reportedComplaints", JSON.stringify(reportedProblems));
//   }, [reportedProblems]);


//   const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLocation(e.target.value)
//   }

//   const handleUseCurrentLocation = () => {
//     setShowComplaintForm(true)
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     alert(`Searching for issues near: ${location}`)
//   }

//   const handleRegisterComplaint = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       let imageUrl = "/placeholder.svg?height=80&width=150"
//       if (complaintImage) {
//         imageUrl = URL.createObjectURL(complaintImage)
//       }

//       const newComplaint: Complaint = {
//         id: reportedProblems.length + 1,
//         name: complaintName,
//         description: complaintDescription,
//         image: imageUrl,
//         department: department,
//       }

//       await new Promise((resolve) => setTimeout(resolve, 1000))

//       setReportedProblems((prevProblems: Complaint[]) => [newComplaint, ...prevProblems])

//       setComplaintName("")
//       setComplaintDescription("")
//       setComplaintImage(null)
//       setDepartment("")
//       setShowComplaintForm(false)

//       alert("Complaint registered successfully!")

//       if (department && departmentEmailMap[department]) {
//         const recipientEmail = departmentEmailMap[department];
//         console.log(`Simulating email sent to: ${recipientEmail} for complaint: ${complaintName}`);
//       } else {
//         console.log("No department selected or department email not found.");
//       }


//     } catch (error) {
//       alert("Failed to register complaint. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setComplaintImage(e.target.files[0])
//     }
//   }

//   return (
//     <div className="min-h-screen flex flex-col font-sans text-gray-900">
//       {/* Header */}
//       <header className="bg-blue-700 py-6 px-4 shadow-md">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold text-white text-center">
//             AI-Enabled Public Service Complaint Dashboard
//           </h1>
//           <p className="text-lg text-gray-100 text-center mt-2">
//             Analyze, Route, and Resolve Public Issues Efficiently
//           </p>

//           {/* <form onSubmit={handleSubmit} className="mt-6 flex justify-center">
//             <input
//               type="text"
//               placeholder="Enter a location to search for issues"
//               className="w-full max-w-xl px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               value={location}
//               onChange={handleLocationChange}
//             />
//           </form> */}

//           <div className="flex justify-center mt-2 gap-3">
           
//             <button
//               type="button"
//               className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//               onClick={handleUseCurrentLocation}
//             >
//               Report Complaint
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 px-4 py-8">
//         <div className="max-w-6xl mx-auto">
//           {/* How to Report Section */}
//           <section className="bg-white p-6 rounded-md shadow-md mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Report a Problem</h2>
//             <ol className="list-decimal pl-6 text-gray-700">
//               <li className="mb-2">Enter a find issues nearby.</li>
//               <li className="mb-2">Describe the problem clearly and provide as much detail as possible.</li>
//               <li>Your complaint will be analyzed and routed to the responsible authority for prompt resolution.</li>
//             </ol>
//           </section>

//           {/* Recently Reported Problems */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Recently Reported Problems
//             </h2>

//             <div className="overflow-x-auto bg-white rounded-md shadow-md">
//               <table className="min-w-full table-auto">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                       Sr. No.
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                       Description
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                       Image
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
//                       Department
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {reportedProblems.map((problem: Complaint) => (
//                     <tr key={problem.id} className="even:bg-gray-50">
//                       <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{problem.id}</td>
//                       <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{problem.name}</td>
//                       <td className="px-4 py-4 text-sm text-gray-900">{problem.description}</td>
//                       <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <Image
//                           src={problem.image || "/placeholder.svg"}
//                           alt={`Report for ${problem.name}`}
//                           width={100}
//                           height={50}
//                           className="object-cover rounded-md"
//                         />
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {problem.department}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>
//         </div>
//       </main>

//       {/* Complaint Registration Form */}
//       {showComplaintForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-md shadow-lg p-8 max-w-md w-full">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Register Complaint</h2>
//             <form onSubmit={handleRegisterComplaint}>
//               <div className="mb-4">
//                 <label htmlFor="complaintName" className="block text-gray-700 text-sm font-bold mb-2">
//                   Complaint Name
//                 </label>
//                 <input
//                   type="text"
//                   id="complaintName"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   value={complaintName}
//                   onChange={(e) => setComplaintName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="complaintDescription" className="block text-gray-700 text-sm font-bold mb-2">
//                   Complaint Description
//                 </label>
//                 <textarea
//                   id="complaintDescription"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   rows={4}
//                   value={complaintDescription}
//                   onChange={(e) => setComplaintDescription(e.target.value)}
//                   required
//                 />
//               </div>
//               {/* Department Selection */}
//               <div className="mb-4">
//                 <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">
//                   Department
//                 </label>
//                 <select
//                   id="department"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   value={department}
//                   onChange={(e) => setDepartment(e.target.value)}
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   <option value="Roads & Infrastructure">Roads & Infrastructure</option>
//                   <option value="Drainage & Water">Drainage & Water</option>
//                   <option value="Street Lighting">Street Lighting</option>
//                   <option value="Waste Management">Waste Management</option>
//                   <option value="Electricity">Electricity</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="complaintImage" className="block text-gray-700 text-sm font-bold mb-2">
//                   Complaint Image (Optional)
//                 </label>
//                 <input
//                   type="file"
//                   id="complaintImage"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                 />
//                 <div className="text-sm text-gray-500 mt-1">
//                   {complaintImage ? complaintImage.name : "No file chosen"}
//                 </div>
//                 {complaintImage && (
//                   <div className="mt-2">
//                     <Image
//                       src={URL.createObjectURL(complaintImage) || "/placeholder.svg"}
//                       alt="Preview"
//                       width={100}
//                       height={50}
//                       className="object-cover rounded-md shadow-sm"
//                     />
//                   </div>
//                 )}
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//                   onClick={() => setShowComplaintForm(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Registering..." : "Register"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-800 text-gray-300 p-4 text-center">
//         <p className="text-sm">Awareness is the first step towards change</p>
//       </footer>
//     </div>
//   )
// }












// "use client"

// import type React from "react"
// import Image from "next/image"
// import { useState, useEffect } from "react"
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons

// interface Complaint {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   department?: string;
// }

// export default function PublicServiceDashboard() {
//   const [location, setLocation] = useState("")
//   const [showComplaintForm, setShowComplaintForm] = useState(false)
//   const [complaintName, setComplaintName] = useState("")
//   const [complaintDescription, setComplaintDescription] = useState("")
//   const [complaintImage, setComplaintImage] = useState<File | null>(null)
//   const [department, setDepartment] = useState("")
//   const [reportedProblems, setReportedProblems] = useState<Complaint[]>([]);
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isHowToReportOpen, setIsHowToReportOpen] = useState(true); // State for collapse

//   const departmentEmailMap: Record<string, string> = {
//     "Roads & Infrastructure": "roads@example.gov",
//     "Drainage & Water": "drainage@example.gov",
//     "Street Lighting": "lighting@example.gov",
//     "Waste Management": "waste@example.gov",
//     "Electricity": "electricity@example.gov",
//     "Other": "other@example.gov",
//   }

//   useEffect(() => {
//     const storedProblems = localStorage.getItem("reportedComplaints");
//     if (storedProblems) {
//       setReportedProblems(JSON.parse(storedProblems));
//     } else {
//       setReportedProblems([ /* ... initial data ... */ ]);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("reportedComplaints", JSON.stringify(reportedProblems));
//   }, [reportedProblems]);

//   const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLocation(e.target.value)
//   }

//   const handleUseCurrentLocation = () => {
//     setShowComplaintForm(true)
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     alert(`Searching for issues near: ${location}`)
//   }

//   const handleRegisterComplaint = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       let imageUrl = "/placeholder.svg?height=80&width=150"
//       if (complaintImage) {
//         imageUrl = URL.createObjectURL(complaintImage)
//       }

//       const newComplaint: Complaint = {
//         id: reportedProblems.length + 1,
//         name: complaintName,
//         description: complaintDescription,
//         image: imageUrl,
//         department: department,
//       }

//       await new Promise((resolve) => setTimeout(resolve, 1000))

//       setReportedProblems((prevProblems: Complaint[]) => [newComplaint, ...prevProblems])

//       setComplaintName("")
//       setComplaintDescription("")
//       setComplaintImage(null)
//       setDepartment("")
//       setShowComplaintForm(false)

//       alert("Complaint registered successfully!")

//       if (department && departmentEmailMap[department]) {
//         const recipientEmail = departmentEmailMap[department];
//         console.log(`Simulating email sent to: ${recipientEmail} for complaint: ${complaintName}`);
//       } else {
//         console.log("No department selected or department email not found.");
//       }

//     } catch (error) {
//       alert("Failed to register complaint. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setComplaintImage(e.target.files[0])
//     }
//   }

//   const toggleHowToReport = () => {
//     setIsHowToReportOpen(!isHowToReportOpen);
//   };


//   return (
//     <div className="min-h-screen flex flex-col font-sans text-gray-900">
//       {/* Header */}
//       <header className="bg-blue-700 py-6 px-4 shadow-md">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold text-white text-center">
//             AI-Enabled Public Service Complaint Dashboard
//           </h1>
//           <p className="text-lg text-gray-100 text-center mt-2">
//             Analyze, Route, and Resolve Public Issues Efficiently
//           </p>

//           <div className="flex justify-center mt-2 gap-3">
           
//             <button
//               type="button"
//               className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//               onClick={handleUseCurrentLocation}
//             >
//               Report Complaint
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 px-4 py-8">
//         <div className="max-w-6xl mx-auto">
//           {/* How to Report Section - Collapsible */}
//           <section className="bg-white rounded-md shadow-md mb-8 overflow-hidden"> {/* Added overflow-hidden */}
//             <div
//               className="p-6 flex justify-between items-center cursor-pointer"
//               onClick={toggleHowToReport}
//             >
//               <h2 className="text-2xl font-semibold text-gray-800">How to Report a Problem</h2>
//               <button className="focus:outline-none">
//                 {isHowToReportOpen ? <FaChevronUp /> : <FaChevronDown />}
//               </button>
//             </div>
//             {isHowToReportOpen && ( // Conditionally render content
//               <div className="p-6 border-t border-gray-200"> {/* Added content wrapper */}
//                 <ol className="list-decimal pl-6 text-gray-700">
//                   <li className="mb-2">Enter  find issues nearby.</li>
//                   <li className="mb-2">Describe the problem clearly and provide as much detail as possible.</li>
//                   <li>Your complaint will be analyzed and routed to the responsible authority for prompt resolution.</li>
//                 </ol>
//               </div>
//             )}
//           </section>


//           {/* Recently Reported Problems */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Recently Reported Problems
//             </h2>

//             <div className="overflow-x-auto bg-white rounded-md shadow-md">
//               <table className="min-w-full table-auto ">
//                 <thead className="bg-blue-700">
//                   <tr>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                       Sr. No.
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                       Description
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                       Image
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                       Department
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {reportedProblems.map((problem: Complaint) => (
//                     <tr key={problem.id} className="even:bg-gray-50">
//                       <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{problem.id}</td>
//                       <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{problem.name}</td>
//                       <td className="px-4 py-4 text-sm text-gray-900">{problem.description}</td>
//                       <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <Image
//                           src={problem.image || "/placeholder.svg"}
//                           alt={`Report for ${problem.name}`}
//                           width={100}
//                           height={50}
//                           className="object-cover rounded-md"
//                         />
//                       </td>
//                       <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {problem.department}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>
//         </div>
//       </main>

//       {/* Complaint Registration Form */}
//       {showComplaintForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-md shadow-lg p-8 max-w-md w-full">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Register Complaint</h2>
//             <form onSubmit={handleRegisterComplaint}>
//               <div className="mb-4">
//                 <label htmlFor="complaintName" className="block text-gray-700 text-sm font-bold mb-2">
//                   Complaint Name
//                 </label>
//                 <input
//                   type="text"
//                   id="complaintName"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   value={complaintName}
//                   onChange={(e) => setComplaintName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="complaintDescription" className="block text-gray-700 text-sm font-bold mb-2">
//                   Complaint Description
//                 </label>
//                 <textarea
//                   id="complaintDescription"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   rows={4}
//                   value={complaintDescription}
//                   onChange={(e) => setComplaintDescription(e.target.value)}
//                   required
//                 />
//               </div>
//               {/* Department Selection */}
//               <div className="mb-4">
//                 <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">
//                   Department
//                 </label>
//                 <select
//                   id="department"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   value={department}
//                   onChange={(e) => setDepartment(e.target.value)}
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   <option value="Roads & Infrastructure">Roads & Infrastructure</option>
//                   <option value="Drainage & Water">Drainage & Water</option>
//                   <option value="Street Lighting">Street Lighting</option>
//                   <option value="Waste Management">Waste Management</option>
//                   <option value="Electricity">Electricity</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="complaintImage" className="block text-gray-700 text-sm font-bold mb-2">
//                   Complaint Image (Optional)
//                 </label>
//                 <input
//                   type="file"
//                   id="complaintImage"
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                 />
//                 <div className="text-sm text-gray-500 mt-1">
//                   {complaintImage ? complaintImage.name : "No file chosen"}
//                 </div>
//                 {complaintImage && (
//                   <div className="mt-2">
//                     <Image
//                       src={URL.createObjectURL(complaintImage) || "/placeholder.svg"}
//                       alt="Preview"
//                       width={100}
//                       height={50}
//                       className="object-cover rounded-md shadow-sm"
//                     />
//                   </div>
//                 )}
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//                   onClick={() => setShowComplaintForm(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Registering..." : "Register"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-800 text-gray-300 p-4 text-center">
//         <p className="text-sm">Awareness is the first step towards change</p>
//       </footer>
//     </div>
//   )
// }










// app/public-service-dashboard/page.tsx
"use client"

import type React from "react"
import { useState, useEffect } from "react"

import Header from './components/Header';
import Footer from './components/Footer';
import HowToReportSection from './components/HowToReportSection';
import ComplaintForm from './components/ComplaintForm';
import ComplaintTable from './components/ComplaintTable';


export interface Complaint { // Export the interface
    id: number;
    name: string;
    description: string;
    image: string;
    department?: string;
}

export default function PublicServiceDashboard() {
    const [location, setLocation] = useState("");
    const [showComplaintForm, setShowComplaintForm] = useState(false);
    const [reportedProblems, setReportedProblems] = useState<Complaint[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const departmentEmailMap: Record<string, string> = {
        "Roads & Infrastructure": "roads@example.gov",
        "Drainage & Water": "drainage@example.gov",
        "Street Lighting": "lighting@example.gov",
        "Waste Management": "waste@example.gov",
        "Electricity": "electricity@example.gov",
        "Other": "other@example.gov",
    };

    useEffect(() => {
        // Fetch complaints from backend API here (replace with your API endpoint)
        const initialProblems: Complaint[] = [ // Default initial data, replace with API call later
            { id: 1, name: "Potholes on Bhulabhai Desai Road", description: "Big potholes are there on the road", image: "/placeholder.svg?height=80&width=150" },
            { id: 2, name: "Improper drainage", description: "The drainage system at PCMC is not proper", image: "/placeholder.svg?height=80&width=150" },
            { id: 3, name: "Water Logging", description: "Water logging due to heavy rains in Akurdi Railway Tunnel", image: "/placeholder.svg?height=80&width=150" },
            { id: 4, name: "Light not on", description: "The street light is off", image: "/placeholder.svg?height=80&width=150" },
            { id: 5, name: "Garbage in Akurdi", description: "Garbage in Akurdi area", image: "/placeholder.svg?height=80&width=150" },
            { id: 6, name: "Potholes in area", description: "Big potholes in Akurdi area", image: "/placeholder.svg?height=80&width=150" },
            { id: 7, name: "Chandni", description: "Damaged Road", image: "/placeholder.svg?height=80&width=150" },
            { id: 8, name: "Chandni", description: "Damaged Road", image: "/placeholder.svg?height=80&width=150" },
            { id: 9, name: "Electricity cutoffs", description: "very uduku cant tattukofy", image: "/placeholder.svg?height=80&width=150" },
        ];
        setReportedProblems(initialProblems); // Set initial problems
    }, []);


    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    };

    const handleUseCurrentLocation = () => {
        setShowComplaintForm(true);
    };

    const handleSubmitSearch = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Searching for issues near: ${location}`);
    };

    const handleRegisterComplaint = async (complaintData: any) => { // Receive complaint data from form
        setIsSubmitting(true);
        try {
            // Simulate API call delay and ID generation
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const newComplaint: Complaint = {
                id: reportedProblems.length + 1, // Simulate ID - backend should generate this
                ...complaintData, // Spread data from form
            };

            setReportedProblems((prevProblems: Complaint[]) => [newComplaint, ...prevProblems]);
            setShowComplaintForm(false);
            alert("Complaint registered successfully!");

            if (complaintData.department && departmentEmailMap[complaintData.department]) {
                const recipientEmail = departmentEmailMap[complaintData.department];
                console.log(`Simulating email sent to: ${recipientEmail} for complaint: ${complaintData.name}`);
            } else {
                console.log("No department selected or department email not found.");
            }


        } catch (error) {
            alert("Failed to register complaint. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancelComplaintForm = () => {
        setShowComplaintForm(false);
    };

    const handleReportComplaintClick = () => {
        setShowComplaintForm(true);
    };


    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900">
            <Header onReportComplaintClick={handleReportComplaintClick} />

            {/* Main Content */}
            <main className="flex-grow bg-gray-100 px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <HowToReportSection />
                    <ComplaintTable reportedProblems={reportedProblems} />
                </div>
            </main>

            {/* Complaint Registration Form */}
            {showComplaintForm && (
                <ComplaintForm
                    onSubmitComplaint={handleRegisterComplaint}
                    onCancel={handleCancelComplaintForm}
                    isSubmitting={isSubmitting}
                />
            )}

            <Footer />
        </div>
    );
}
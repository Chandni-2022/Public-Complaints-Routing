// "use client";
// import * as React from "react";
// import Link from "next/link";
// import PublicServiceDashboard from "./public-service-dashboard/page";

// const Start: React.FC = () => {
//   return (
//     <main className="h-screen  md:flex-row lg:flex-row items-center w-full relative">
//       <PublicServiceDashboard />
//     </main>
//   );
// };

// export default Start;

import ComplaintsDashboard from "./components/complaint-dashboard";




export default function Home() {
  return <ComplaintsDashboard />
}


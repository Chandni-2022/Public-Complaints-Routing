// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
  
// // };

// // export default nextConfig;


// import type { NextConfig } from "next";  

// const nextConfig: NextConfig = {  
//   reactStrictMode: true, // Or false, depending on your preference  
//   images: {  
//     domains: [], // Add any external domains you plan to use for images here.  Leave empty if you only use local images.  
//   },  
// };  

// export default nextConfig; 











// import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// // };

// // export default nextConfig;


// module.exports = {
//   output: 'export',
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.builder.io',
//         pathname: '**',
//       },
//     ],
//   },
  
//   // other configurations if necessary
// }



/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // images: {
  //   unoptimized: true,
  //   domains: ["cdn.builder.io"],
  // },

  reactStrictMode: true,  
  images: {  
    domains: [], // Add domains here if using external images  
  }, 
}

module.exports = nextConfig


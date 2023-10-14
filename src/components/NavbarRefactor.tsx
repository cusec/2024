
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import logo from "../assets/logo.svg";
import HamburgerButton from "@/components/HamburgerButton";

type ChildProps = {
  clicked: () => void;
};


// export default function Navbar({ clicked }: ChildProps) {
//   // Funtionality to display event details children text
//   const [isEventDetailsClicked, setIsEventDetailsClicked] = useState(true);
//   const toggleEventDetails = () => {
//     setIsEventDetailsClicked(!isEventDetailsClicked);
//   };

//   // Functionality for hamburger icon and mobile menu
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     isEventDetailsClicked ? null : toggleEventDetails();
//     clicked();
//   };

//   // Close mobile menu when window is resized to desktop size
//   useEffect(() => {
//     const hideMenu = () => {
//       if (window.innerWidth > 768 && isMobileMenuOpen) {
//         setIsMobileMenuOpen(false);
//         clicked();
//       }
//     };
//     window.addEventListener("resize", hideMenu);

//     return () => {
//       window.removeEventListener("resize", hideMenu);
//     };
//   });

//   return (
//     <header className="bg-black/[.85] z-50 fixed top-0 w-full flex justify-center bg-clip-padding">
//       {/* Desktop Navbar */}
//       <div
//         className={`w-full max-w-screen-2xl mx-6 lg:mx-24 backdrop-blur-[6px]`}
//       >
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="flex items-center">
//               <Image
//                 src={logo}
//                 alt="Logo"
//                 width={44}
//                 height={44}
//                 className="hover:scale-105 transition ease-in-out duration-1000 hover:rotate-180"
//                 priority
//               />
//               <span className="ml-2 text-white text-lg font-semibold"></span>
//             </Link>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/#about">About Us</NavLink>

//               {/* Event Details button is special case, it has a dropdown menu */}
//               <button
//                 className="relative uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
//                 onMouseEnter={() => toggleEventDetails()}
//                 onMouseLeave={() => toggleEventDetails()}
//               >
//                 <span className="flex space-x-2">
//                   <Link href="/">Event Details</Link>

//                   <svg
//                     className={`scale-x-125 scale-y-75 transition ease-in-out duration-1000 ${
//                       isEventDetailsClicked
//                         ? "fill-white"
//                         : "rotate-180 fill-[url(#custom-gradient)]"
//                     }`}
//                     width="12px"
//                     height="20px"
//                     viewBox="0 0 512 512"
//                     version="1.1"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <linearGradient
//                       id="custom-gradient"
//                       x1="0%"
//                       y1="0%"
//                       x2="0%"
//                       y2="100%"
//                     >
//                       <stop stopColor="#AC65E3" offset="0%" />
//                       <stop stopColor="#E087BB" offset="50%" />
//                       <stop stopColor="#FFB963" offset="100%" />
//                     </linearGradient>
//                     <title>triangle-icon</title>
//                     <g id="drop" transform="translate(32.000000, 42.666667)">
//                       <path
//                         d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
//                         id="Combined-Shape"
//                       />
//                     </g>
//                   </svg>
//                 </span>
//                 <div
//                   className={`absolute top-full mt-3 left-0 right-5 text-xl transition-all ease-in-out duration-1000 overflow-hidden ${
//                     isEventDetailsClicked ? "max-h-0" : "max-h-40"
//                   }`}
//                 >
//                   <div className="bg-gradient-to-br from-lavenderFog to-goldenApricot rounded-2xl">
//                     <ul className="space-y-2 flex flex-col bg-black/[.65] rounded-2xl p-4">
//                       <NavLink href="/">Sign up</NavLink>
//                       <NavLink href="/">Schedule</NavLink>
//                       <NavLink href="/sponsors">Sponsors</NavLink>
//                     </ul>
//                   </div>
//                 </div>
//               </button>

//               <NavLink href="/#faq">FAQ</NavLink>
//               <NavLink href="/#contact">Contact</NavLink>
//             </div>
//           </div>

//           {/*Hamburger Button */}
//           <HamburgerButton
//             toggleMobileMenu={toggleMobileMenu}
//             isMobileMenuOpen={isMobileMenuOpen}
//           />
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div
//         className={
//           // `transform top-0 right-0 mt-16 w-full fixed h-full bg-black/80 overflow-auto ease-in-out transition-all duration-300 z-30 ${isMobileMenuOpen ? "translate-y-0" : "translate-y-full"}`

//           `border-t border-stone-700 transform top-0 right-0 mt-16 w-full fixed h-full bg-inherit overflow-auto transition duration-1000 ease-in-out z-10 ${
//             isMobileMenuOpen
//               ? "translate-x-0 backdrop-blur-[6px]"
//               : "translate-x-full backdrop-blur-none"
//           }`
//         }
//       >
//         <div className="flex flex-col mx-6 ml-6 mt-24 space-y-10 uppercase">
//           <NavLink toggleMobileMenu={toggleMobileMenu} href="/">
//             Home
//           </NavLink>
//           <NavLink toggleMobileMenu={toggleMobileMenu} href="/#about">
//             About Us
//           </NavLink>
//           <button
//             className="relative uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
//             onMouseEnter={() => toggleEventDetails()}
//             onMouseLeave={() => toggleEventDetails()}
//           >
//             <span className="flex space-x-2">
//               <Link href="/">Event Details</Link>

//               <svg
//                 className={`scale-x-125 scale-y-75 transition ease-in-out duration-1000 ${
//                   isEventDetailsClicked
//                     ? "fill-white"
//                     : "rotate-180 fill-[url(#sidebar-gradient)]"
//                 }`}
//                 width="12px"
//                 height="30px"
//                 viewBox="0 0 512 512"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <linearGradient
//                   id="sidebar-gradient"
//                   x1="0%"
//                   y1="0%"
//                   x2="0%"
//                   y2="100%"
//                 >
//                   <stop stopColor="#AC65E3" offset="0%" />
//                   <stop stopColor="#E087BB" offset="50%" />
//                   <stop stopColor="#FFB963" offset="100%" />
//                 </linearGradient>
//                 <title>triangle-icon</title>
//                 <g id="drop" transform="translate(32.000000, 42.666667)">
//                   <path
//                     d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
//                     id="Combined-Shape"
//                   />
//                 </g>
//               </svg>
//             </span>
//             <div
//               className={`top-full left-0 right-5 mt-3 text-xl transition-all ease-in-out duration-1000 overflow-hidden ${
//                 isEventDetailsClicked ? "max-h-0" : "max-h-40"
//               }`}
//             >
//               <ul className="space-y-2 flex flex-col p-4">
//                 <NavLink toggleMobileMenu={toggleMobileMenu} href="/">
//                   Sign up
//                 </NavLink>
//                 <NavLink toggleMobileMenu={toggleMobileMenu} href="/">
//                   Schedule
//                 </NavLink>
//                 <NavLink toggleMobileMenu={toggleMobileMenu} href="/sponsors">
//                   Sponsors
//                 </NavLink>
//               </ul>
//             </div>
//           </button>
//           <NavLink toggleMobileMenu={toggleMobileMenu} href="/#faq">
//             FAQ
//           </NavLink>
//           <NavLink toggleMobileMenu={toggleMobileMenu} href="/#contact">
//             Contact
//           </NavLink>
//         </div>
//       </div>
//     </header>
//   );
// }


// Navbar Refactor
// export default function Navbar({ clicked }: ChildProps) {
//   // Funtionality to display event details children text
//   const [isEventDetailsClicked, setIsEventDetailsClicked] = useState(true);
//   const toggleEventDetails = () => {
//     setIsEventDetailsClicked(!isEventDetailsClicked);
//   };

//   // Functionality for hamburger icon and mobile menu
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     isEventDetailsClicked ? null : toggleEventDetails();
//     clicked();
//   };

//   // Close mobile menu when window is resized to desktop size
//   useEffect(() => {
//     const hideMenu = () => {
//       if (window.innerWidth > 768 && isMobileMenuOpen) {
//         setIsMobileMenuOpen(false);
//         clicked();
//       }
//     };
//     window.addEventListener("resize", hideMenu);

//     return () => {
//       window.removeEventListener("resize", hideMenu);
//     };
//   });

//   const links = [
//     { name: "Home", href: "/#home" },
//     { name: "About Us", href: "/#about" },
//     { name: "Event Details", href: "/" },
//     { name: "FAQ", href: "/#faq" },
//     { name: "Contact", href: "/#contact" },
//   ];

//   const NavigationLinks = () => (
//     <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//       {links.map((link) => {
//         return link.name === "Event Details" ? (
//           // Render something different for "Event Details"
//           // Event Details button is special case, it has a dropdown menu
//           <div 
//             key={link.name}
//             className="relative"
//             onMouseEnter={() => toggleEventDetails()}
//             onMouseLeave={() => toggleEventDetails()}
//           >
//             <button
//                 className="uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
//               >
//                 <span className="flex space-x-2">
//                   <Link href="/">Event Details</Link>
//                   <svg
//                     className={`scale-x-125 scale-y-75 transition ease-in-out duration-1000 ${
//                       isEventDetailsClicked
//                         ? "fill-white"
//                         : "rotate-180 fill-[url(#custom-gradient)]"
//                     }`}
//                     width="12px"
//                     height="20px"
//                     viewBox="0 0 512 512"
//                     version="1.1"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <linearGradient
//                       id="custom-gradient"
//                       x1="0%"
//                       y1="0%"
//                       x2="0%"
//                       y2="100%"
//                     >
//                       <stop stopColor="#AC65E3" offset="0%" />
//                       <stop stopColor="#E087BB" offset="50%" />
//                       <stop stopColor="#FFB963" offset="100%" />
//                     </linearGradient>
//                     <title>triangle-icon</title>
//                     <g id="drop" transform="translate(32.000000, 42.666667)">
//                       <path
//                         d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
//                         id="Combined-Shape"
//                       />
//                     </g>
//                   </svg>
//                 </span>
//                 <div
//                   className={`absolute top-full mt-3 left-0 right-5 text-xl transition-all ease-in-out duration-1000 overflow-hidden ${
//                     isEventDetailsClicked ? "max-h-0" : "max-h-40"
//                   }`}
//                 >
//                   <div className="bg-gradient-to-br from-lavenderFog to-goldenApricot rounded-2xl">
//                     <ul className="space-y-2 flex flex-col bg-black/[.65] rounded-2xl p-4">
//                       <NavLink href="/">Sign up</NavLink>
//                       <NavLink href="/">Schedule</NavLink>
//                       <NavLink href="/sponsors">Sponsors</NavLink>
//                     </ul>
//                   </div>
//                 </div>
//             </button>
//           </div>
//         ) : (
//           <Link
//             key={link.name}
//             href={link.href}
//             onClick={isMobileMenuOpen ? toggleMobileMenu : () => {}}
//             className="uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
//           >
//             {link.name}
//           </Link>
//         );
//       })}
//     </nav>
//   );

//   return (
//     <>
//       {/* Main Header */}

//       {/* Glassmorphic floating header */}
//       {/* <header className="mt-1 fixed left-1/2 transform -translate-x-1/2 md:w-[98vw] w-[95vw] box-border z-50 flex px-8 py-2 justify-between bg-black/60 bg-opacity-5 backdrop-blur-md rounded-xl border border-slate-300 border-opacity-20 shadow-lg"> */}

//       {/* Solid header */}
//       <header 
//       className="fixed w-full z-50 flex px-8 py-2 justify-between bg-black/70 bg-opacity-5 backdrop-blur-md border-opacity-20 shadow-lg"
//       >
//         {/* Logo */}
//         <div className="flex-shrink-0 flex items-center">
//           <Link href="/" className="flex items-center">
//             <Image
//               src={logo}
//               alt="CUSEC Navbar Logo"
//               width={40}
//               height={40}
//               className="hover:scale-110 transition ease-in-out duration-1000 hover:rotate-180"
//               priority
//             />
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <section className="hidden md:block">
//           <NavigationLinks />
//         </section>

//         {/* Hamburger Button */}
//         <HamburgerButton
//           toggleMobileMenu={toggleMobileMenu}
//           isMobileMenuOpen={isMobileMenuOpen}
//         />
//       </header>

//       {/* Mobile Side Menu */}
//       <div></div>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import logo from "../assets/logo.svg";
import triangle from "../assets/triangle.svg";
import triangle_white from "../assets/triangle_white.svg";

type ChildProps = {
  clicked: () => void;
};

export default function Navbar({ clicked }: ChildProps) {
  // Funtionality to display event details children text
  const [isEventDetailsClicked, setIsEventDetailsClicked] = useState(true);
  const toggleEventDetails = () => {
    setIsEventDetailsClicked(!isEventDetailsClicked);
  };

  // Functionality for hamburger icon and mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    isEventDetailsClicked ? null : toggleEventDetails();
    clicked();
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        clicked();
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <nav className="bg-black/[.85] z-50 fixed top-0 w-full flex justify-center bg-clip-padding">
      {/* Desktop Navbar */}
      <div
        className={`w-full max-w-screen-2xl mx-6 lg:mx-24 backdrop-blur-[2px]`}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Logo" width={44} height={44} />
              <span className="ml-2 text-white text-lg font-semibold">
                {/* CUSEC */}
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* <button
                onClick={toggleEventDetails}
                className="text-white text-2xl font-semibold w-fit transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3  md:font-medium tracking-wider"
              >
                <div
                  className={`flex bg-clip-text transition-all ease-in-out duration-500 ${
                    isEventDetailsClicked
                      ? "hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
                      : "scale-105 text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
                  }`}
                >
                  Event Details
                  <span className="px-2"></span>
                  <Image
                    src={triangle_white}
                    alt="Triangle"
                    width={20}
                    height={20}
                    className={`scale-x-125 scale-y-75 transition ease-in-out duration-1000 ${
                      isEventDetailsClicked ? "" : "rotate-180"
                    }`
                  }/>
                </div>
                <div
                  className={`ml-4 mt-4 text-xl transition-all ease-in-out duration-1000 overflow-hidden ${
                    isEventDetailsClicked ? "max-h-0" : "max-h-28"
                  }`}
                >
                  <ul className="space-y-2 flex flex-col">
                    <Link
                      href="#"
                      className="pl-4 w-fit bg-clip-text transition-all ease-in-out duration-500 hover:scale-110 hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
                    >
                      Sign up
                    </Link>
                    <Link
                      href="#"
                      className="pl-4 w-fit bg-clip-text transition-all ease-in-out duration-500 hover:scale-110 hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
                    >
                      Schedule
                    </Link>
                    <Link
                      href="#"
                      className="pl-4 w-fit bg-clip-text transition-all ease-in-out duration-500 hover:scale-110 hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
                    >
                      Sponsors
                    </Link>
                  </ul>
                </div>
              </button> */}
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>

              <button
                className="relative uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
                onMouseEnter={() => toggleEventDetails()}
                onMouseLeave={() => toggleEventDetails()}
              >
                <span className="flex space-x-2">
                  <Link href="/">Event Details</Link>

                  <svg
                    className={`scale-x-125 scale-y-75 transition ease-in-out duration-1000 ${
                      isEventDetailsClicked
                        ? "fill-white"
                        : "rotate-180 fill-[url(#custom-gradient)]"
                    }`}
                    width="12px"
                    height="20px"
                    viewBox="0 0 512 512"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="custom-gradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop stopColor="#AC65E3" offset="0%" />
                      <stop stopColor="#E087BB" offset="50%" />
                      <stop stopColor="#FFB963" offset="100%" />
                    </linearGradient>
                    <title>triangle-icon</title>
                    <g id="drop" transform="translate(32.000000, 42.666667)">
                      <path
                        d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
                        id="Combined-Shape"
                      />
                    </g>
                  </svg>
                </span>
                <div
                  className={`absolute top-full left-0 right-5 mt-3 text-xl transition-all ease-in-out duration-1000 overflow-hidden ${
                    isEventDetailsClicked ? "max-h-0" : "max-h-40"
                  }`}
                >
                  <ul className="space-y-2 flex flex-col bg-black/[.85] rounded-2xl p-4">
                    <NavLink href="/">Sign up</NavLink>
                    <NavLink href="/">Schedule</NavLink>
                    <NavLink href="/">Sponsors</NavLink>
                  </ul>
                </div>
              </button>

              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>

          {/*Hamburger Button */}
          <div className="flex md:hidden">
            <button
              className="transform transition ease-in-out duration-500 hover:scale-125 group"
              onClick={toggleMobileMenu}
            >
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isMobileMenuOpen ? "translate-x-10" : ""
                  } group-hover:bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 rounded transform transition-all duration-700 delay-75 ${
                    isMobileMenuOpen ? "translate-x-10" : ""
                  } group-hover:bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-700 origin-left delay-150 ${
                    isMobileMenuOpen ? "translate-x-10" : ""
                  } group-hover:bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot`}
                ></div>

                <div
                  className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex ${
                    isMobileMenuOpen
                      ? "translate-x-0  w-12"
                      : "translate-x-10 w-0"
                  }`}
                >
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-700 delay-300 ${
                      isMobileMenuOpen ? "rotate-45" : "rotate-0"
                    } group-hover:bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot`}
                  ></div>
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-700 delay-300 ${
                      isMobileMenuOpen ? "-rotate-45" : "rotate-0"
                    } group-hover:bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot`}
                  ></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={
          // `transform top-0 right-0 mt-16 w-full fixed h-full bg-black/80 overflow-auto ease-in-out transition-all duration-300 z-30 ${isMobileMenuOpen ? "translate-y-0" : "translate-y-full"}`

          `border-t border-stone-700 transform top-0 right-0 mt-16 w-full fixed h-full bg-inherit overflow-auto transition duration-1000 ease-in-out z-10 ${
            isMobileMenuOpen
              ? "translate-x-0 backdrop-blur-[2px]"
              : "translate-x-full backdrop-blur-none"
          }`
        }
      >
        <div className="flex flex-col mx-6 ml-6 mt-24 space-y-10 uppercase">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

// Past code for 'Event Details' button

{
  /* <div
            onClick={toggleEventDetails}
            className="text-white text-2xl font-semibold w-fit bg-clip-text transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"
          >
            <div
              className={`flex bg-clip-text transition-all ease-in-out duration-500 ${
                isEventDetailsClicked
                  ? "hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
                  : "scale-105 text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
              }`}
            >
              Event Details
              <span className="px-2"></span>
              <Image
                src={triangle}
                alt="Triangle"
                width={20}
                height={20}
                className={`scale-x-125 scale-y-75 transition ease-in-out duration-1000 ${
                  isEventDetailsClicked ? "" : "rotate-180"
                }`}
              />
            </div>
            <div
              className={`ml-4 mt-4 text-xl transition-all ease-in-out duration-1000 overflow-hidden ${
                isEventDetailsClicked ? "max-h-0" : "max-h-28"
              }`}
            >
              <ul className="space-y-2 flex flex-col">
                <Link
                  href="#"
                  className="pl-4 w-fit bg-clip-text transition-all ease-in-out duration-500 hover:scale-110 hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
                >
                  Sign up
                </Link>
                <Link
                  href="#"
                  className="pl-4 w-fit bg-clip-text transition-all ease-in-out duration-500 hover:scale-110 hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
                >
                  Schedule
                </Link>
                <Link
                  href="#"
                  className="pl-4 w-fit bg-clip-text transition-all ease-in-out duration-500 hover:scale-110 hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot"
                >
                  Sponsors
                </Link>
              </ul>
            </div>
          </div> */
}

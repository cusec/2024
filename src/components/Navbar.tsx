"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import logo from "../assets/logo.svg";
import triangle from "../assets/triangle.svg";


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
        className={`w-full max-w-screen-2xl mx-6 lg:mx-24 uppercase backdrop-blur-[2px]`}
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
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>
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

{/* <div
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
          </div> */}
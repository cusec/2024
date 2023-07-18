"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black/80">
      {/* Desktop Navbar */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-24 uppercase">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Logo" width={44} height={44} />
              <span className="ml-2 text-white text-lg font-semibold">
                CUSEC
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="rounded-md text-sm font-medium px-3 py-2 text-white bg-clip-text hover:text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot transition-all hover:scale-125 ease-in-out duration-500"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-md text-sm font-medium px-3 py-2 text-white bg-clip-text hover:text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot transition-all hover:scale-125 ease-in-out duration-500"
              >
                About Us
              </Link>
              <Link
                href="/event"
                className="rounded-md text-sm font-medium px-3 py-2 text-white bg-clip-text hover:text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot transition-all hover:scale-125 ease-in-out duration-500"
              >
                Event Details
              </Link>
              <Link
                href="/faq"
                className="rounded-md text-sm font-medium px-3 py-2 text-white bg-clip-text hover:text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot transition-all hover:scale-125 ease-in-out duration-500"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="rounded-md text-sm font-medium px-3 py-2 text-white bg-clip-text hover:text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot transition-all hover:scale-125 ease-in-out duration-500"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Nav Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:scale-125 transition ease-in-out duration-500"
            >
              <span className="sr-only">Open mobile menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={
          // `transform top-0 right-0 mt-16 w-full fixed h-full bg-black/80 overflow-auto ease-in-out transition-all duration-300 z-30 ${isMobileMenuOpen ? "translate-y-0" : "translate-y-full"}`

          `border-t border-stone-700 transform top-0 right-0 mt-16 w-full fixed h-full bg-black/80 overflow-auto ease-in-out transition-all duration-700 z-30 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`
        }
      >
        <div className="flex flex-col mx-6 sm:ml-7 mt-24 space-y-10 uppercase">
          <Link
            href="/"
            className="text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500"
          >
            About Us
          </Link>
          <Link
            href="/event"
            className="text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500"
          >
            Event Details
          </Link>
          <Link
            href="/faq"
            className="text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

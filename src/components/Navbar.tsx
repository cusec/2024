"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import logo from "../assets/logo.svg";
import HamburgerButton from "@/components/HamburgerButton";
import { motion } from "framer-motion";

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

  const NavLinkAnimation = {
    initial: { opacity: 0, y: -20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const transitionConfig = (delay = 0) => ({
    duration: 1.5,
    delay: delay,
    type: "spring",
    bounce: 0.5,
  });

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const offset = window.innerWidth < 768 ? 100 : 200;
    const element = document.getElementById(id);

    if (element) {
      // If the element exists on the current page, scroll to it
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="bg-black/[.75] z-50 fixed top-0 w-full flex justify-center bg-clip-padding">
      {/* Desktop Navbar */}
      <div
        className={`w-full max-w-screen-2xl mx-6 lg:mx-24 backdrop-blur-[6px]`}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 1080 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 6,
                delay: 0,
                type: "spring",
                bounce: 0.5,
              }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="Logo"
                  width={44}
                  height={44}
                  className="hover:scale-105 transition ease-in-out duration-1000 hover:rotate-180"
                  priority
                />
              </Link>
            </motion.div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <motion.div
                {...NavLinkAnimation}
                transition={transitionConfig(0.5)}
              >
                <NavLink href="/">Home</NavLink>
              </motion.div>

              <motion.div
                {...NavLinkAnimation}
                transition={transitionConfig(0.7)}
              >
                <NavLink href="/about">About Us</NavLink>
              </motion.div>

              <motion.div
                {...NavLinkAnimation}
                transition={transitionConfig(0.9)}
              >
                <button
                  aria-label="Event Details Button"
                  className="relative uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
                  onMouseEnter={() => toggleEventDetails()}
                  onMouseLeave={() => toggleEventDetails()}
                >
                  {/* Event Details button is special case, it has a dropdown menu */}
                  <span className="flex space-x-2">
                    <Link href="/#about">Event Details</Link>
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
                    className={`absolute top-full mt-3 left-0 right-5 text-xl transition-all ease-in-out duration-1000 overflow-hidden ${
                      isEventDetailsClicked ? "max-h-0" : "max-h-72"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-lavenderFog to-goldenApricot rounded-2xl">
                      <ul className="space-y-2 flex flex-col bg-black/[.65] rounded-2xl p-4">
                        <li>
                          <NavLink href="/schedule">Schedule</NavLink>
                        </li>
                        <li>
                          <NavLink href="/speakers">Speakers</NavLink>
                        </li>
                        <li>
                          {/* <NavLink href="/">Schedule</NavLink> */}
                          <NavLink href="/sponsors">Sponsors</NavLink>
                        </li>
                        <li>
                          <NavLink
                            href="https://www.tickettailor.com/events/cusec/943944"
                            target="_blank"
                          >
                            Sign up
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1698351860401&key=GRP&app=resvlink"
                            target="_blank"
                          >
                            Hotel
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </button>
              </motion.div>

              <motion.div
                {...NavLinkAnimation}
                transition={transitionConfig(1.1)}
              >
                <Link
                  href="/#faq"
                  passHref
                  onClick={(e) => handleNavClick(e, "faq")}
                  className="flex uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
                >
                  FAQ
                </Link>
              </motion.div>

              <motion.div
                {...NavLinkAnimation}
                transition={transitionConfig(1.3)}
              >
                <Link
                  href="/#contact"
                  onClick={(e) => {
                    handleNavClick(e, "contact");
                  }}
                  className="flex uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </div>

          {/*Hamburger Button */}
          <HamburgerButton
            toggleMobileMenu={toggleMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={
          // `transform top-0 right-0 mt-16 w-full fixed h-full bg-black/80 overflow-auto ease-in-out transition-all duration-300 z-30 ${isMobileMenuOpen ? "translate-y-0" : "translate-y-full"}`

          `border-t border-stone-700 transform top-0 right-0 mt-16 w-full fixed h-full bg-inherit overflow-auto transition duration-1000 ease-in-out z-10 ${
            isMobileMenuOpen
              ? "translate-x-0 backdrop-blur-[6px]"
              : "translate-x-full backdrop-blur-none"
          }`
        }
      >
        <div className="flex flex-col mx-6 ml-6 mt-24 space-y-10 uppercase">
          <NavLink toggleMobileMenu={toggleMobileMenu} href="/">
            Home
          </NavLink>
          <NavLink toggleMobileMenu={toggleMobileMenu} href="/about">
            About Us
          </NavLink>
          <button
          aria-label="Event Details Button"
            className="relative uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
            onMouseEnter={() => toggleEventDetails()}
            onMouseLeave={() => toggleEventDetails()}
          >
            <span className="flex space-x-2">
              <Link href="/#about">Event Details</Link>

              <svg
                className={`scale-x-125 scale-y-75 transition ease-in-out duration-1000 ${
                  isEventDetailsClicked
                    ? "fill-white"
                    : "rotate-180 fill-[url(#sidebar-gradient)]"
                }`}
                width="12px"
                height="30px"
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <linearGradient
                  id="sidebar-gradient"
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
              className={`top-full left-0 right-5 mt-3 text-xl transition-all ease-in-out duration-1000 overflow-hidden ${
                isEventDetailsClicked ? "max-h-0" : "max-h-52"
              }`}
            >
              <ul className="space-y-2 flex flex-col p-4">
                {" "}
                <li>
                  {/* <NavLink toggleMobileMenu={toggleMobileMenu} href="/">
                  Schedule
                </NavLink> */}
                  <NavLink toggleMobileMenu={toggleMobileMenu} href="/schedule">
                    Schedule
                  </NavLink>
                </li>{" "}
                <li>
                  {/* <NavLink toggleMobileMenu={toggleMobileMenu} href="/">
                  Schedule
                </NavLink> */}
                  <NavLink toggleMobileMenu={toggleMobileMenu} href="/speakers">
                    Speakers
                  </NavLink>
                </li>
                <li>
                  {/* <NavLink toggleMobileMenu={toggleMobileMenu} href="/">
                  Schedule
                </NavLink> */}
                  <NavLink toggleMobileMenu={toggleMobileMenu} href="/sponsors">
                    Sponsors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    toggleMobileMenu={toggleMobileMenu}
                    href="https://www.tickettailor.com/events/cusec/943944"
                    target="_blank"
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    toggleMobileMenu={toggleMobileMenu}
                    href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1698351860401&key=GRP&app=resvlink"
                    target="_blank"
                  >
                    Hotel
                  </NavLink>
                </li>
              </ul>
            </div>
          </button>
          <Link
            href="/#faq"
            onClick={(e) => {
              handleNavClick(e, "faq");
              toggleMobileMenu();
            }}
            className="flex uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
          >
            FAQ
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => {
              handleNavClick(e, "contact");
              toggleMobileMenu();
            }}
            className="flex uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

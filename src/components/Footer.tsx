import { useFadeBackground } from "@/app/layout";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const fadeBackground = useFadeBackground();
  return (
    <footer
      className={`transition-opacity ease-in-out duration-[1500ms] bg-black/[.85] w-full flex justify-center 
      `}
    >
      <div className="flex items-baseline px-6 lg:mx-24 py-4">
        
        <div className="flex space-x-4">
          <Link
            href="/privacy"
            className="text-white bg-clip-text hover:text-transparent bg-gradient-to-tr from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-lg md:px-3"
          >
            Privacy
          </Link>
          <Link
            href="/code-of-conduct"
            className="text-white bg-clip-text hover:text-transparent bg-gradient-to-tr from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-lg md:px-3"
            >
            Code of Conduct
          </Link>
        </div>

        {/* The following workaround with the svg had to be used because the react-icons package currently does not support a background gradient for its SVGs using the tailwind approach which is used in the NavLink components. */}
        <svg width="0" height="0">
          <linearGradient
            id="footer-icons-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop stopColor="#AC65E3" offset="0%" />
            <stop stopColor="#E087BB" offset="50%" />
            <stop stopColor="#FFB963" offset="100%" />
          </linearGradient>
        </svg>

        <section className="flex max-[370px]:flex-wrap items-center md:text-xl">

          <div className="flex">
            <Link
              href={"https://www.facebook.com/cusecofficial/"}
              target="_blank"
              className="transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 px-3 max-[370px]:mb-4 md:px-4"
            >
              <FaFacebookF style={{ fill: "url(#footer-icons-gradient)" }} />
            </Link>
            <Link
              href={"https://www.instagram.com/cusecofficial/?hl=en"}
              target="_blank"
              className="transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 px-3 max-[370px]:mb-4 md:px-4"
            >
              <FaInstagram style={{ fill: "url(#footer-icons-gradient)" }} />
            </Link>
          </div>

          <div className="flex">
            <Link
              href={"https://www.linkedin.com/company/cusec/mycompany/"}
              target="_blank"
              className="transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 px-3 max-[370px]:mb-4 md:px-4"
            >
              <FaLinkedinIn style={{ fill: "url(#footer-icons-gradient)" }} />
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UCZ7j8F6h1CxD-uC0od9rHBw"}
              target="_blank"
              className="transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 px-3 max-[370px]:mb-4 md:px-4"
            >
              <FaYoutube style={{ fill: "url(#footer-icons-gradient)" }} />
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}

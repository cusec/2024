import primary_logo_white from "@/assets/primary_logo_white.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const animateInConfig = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.5,
});

export default function Footer() {
  return (
    <footer
      className={`transition-opacity ease-in-out duration-[1500ms] bg-black/[.85] w-full flex justify-center overflow-hidden
      `}
    >
      <motion.div
        {...animateInConfig}
        transition={transitionConfig(0.5)}
        className="lg:max-w-screen-2xl flex justify-center lg:justify-between items-center px-6 lg:mx-24 py-4 w-full"
      >
        <Link href={"/"}>
          <Image
            className="hidden lg:block hover:scale-110 transition-all ease-in-out duration-1000"
            src={primary_logo_white}
            alt="CUSEC Logo Primary White"
            width={140}
            height={50}
          />
        </Link>

        <section className="flex">
          <Link
            href="/privacy"
            className="text-white bg-clip-text hover:text-transparent bg-gradient-to-tr from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 mx-4 md:text-lg md:px-3"
          >
            Privacy
          </Link>
          <Link
            href="/code-of-conduct"
            className="text-white bg-clip-text hover:text-transparent bg-gradient-to-tr from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-110 md:text-lg md:px-3 lg:whitespace-nowrap"
          >
            Code of Conduct
          </Link>
        </section>

        {/* Social Media Icons */}

        <section className="flex max-[330px]:flex-wrap items-center md:text-xl max-[330px]:ml-2">
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
        </section>
      </motion.div>
    </footer>
  );
}

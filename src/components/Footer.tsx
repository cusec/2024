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
      className={`transition-opacity ease-in-out duration-[1500ms] bg-black/[.85] w-full flex justify-center ${
        fadeBackground ? "opacity-0" : "opacity-100 text-red"
      }`}
    >
      <section className="flex items-baseline py-4 space-x-4 px-6 lg:mx-24">
        <Link
          href="/privacy"
          className="text-white font-[16px] bg-clip-text hover:text-transparent bg-gradient-to-tr from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3"
        >
          Privacy
        </Link>
        <Link
          href="/code-of-conduct"
          className="text-white font-[16px] bg-clip-text hover:text-transparent bg-gradient-to-tr from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3"
        >
          Code of Conduct
        </Link>
        <section className="flex items-center text-white space-x-4">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </section>
      </section>
    </footer>
  );
}

import { useFadeBackground } from "@/app/layout";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa"

export default function Footer() {
  const fadeBackground = useFadeBackground();
  return (
    <footer
      className={`transition-opacity ease-in-out duration-[1500ms] bg-black/[.85] w-full flex justify-center ${
        fadeBackground ? "opacity-0" : "opacity-100 text-red"
      }`}
    >
      <section className="flex items-baseline py-4 space-x-4">
        <button className="text-white font-[16px]">Privacy</button>
        <button className="text-white font-[16px]">Code of Conduct</button>
      <section className="flex items-center text-white space-x-4">
          <FaFacebookF />
          <FaInstagram/>
          <FaLinkedinIn/>
          <FaYoutube/>
      </section>
      </section>

    </footer>
  );
}

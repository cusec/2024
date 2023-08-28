import Link from "next/link";
import BlueBorderSquareBox from "./BlueBorderSquareBox";
import { HiEnvelope } from "react-icons/hi2";

export default function Contact() {
  return (
    <BlueBorderSquareBox>
      <section className="lg:max-w-[1024px] max-w-[768px] py-16 px-8 md:px-12">
        <h2 className="font-semibold text-[28px] md:text-[40px] tracking-tight">Contact Us</h2>
        <hr className="block max-w-[3rem] md:max-w-[4rem] h-2 bg-royalPurple" />
        <Link
          href={"mailto:info@cusec.net"}
          className="flex transition ease-in-out duration-500 hover:scale-105 group"
        >
          <HiEnvelope className="fill-royalPurple group-hover:fill-royalBlue transition ease-in-out duration-700" />
          <span className="text-[12px] font-semibold bg-clip-text text-transparent bg-royalPurple group-hover:bg-royalBlue transition ease-in-out duration-1000">
            &nbsp;info@cusec.net
          </span>
        </Link>

        {/* Old Content */}
        {/* <p className="font-regular text-[15px]">
          <strong className="hover:text-[royalBlue] transition-colors ease-in-out duration-500 hover:scale-105">
            {" "}
            <Link href={"mailto:sponsor@cusec.net"}>sponsor@cusec.net</Link>
          </strong>{" "}
          ~ Email for information about{" "}
          <span className="underline underline-offset-1 transition-colors ease-in-out duration-500">
            sponsoring
          </span>{" "}
          the event.
        </p>
        <p className="font-regular text-[15px]">
          <strong className="hover:text-[royalBlue] transition-colors ease-in-out duration-500 hover:scale-105">
            {" "}
            <Link href={"mailto:info@cusec.net"}>info@cusec.net</Link>
          </strong>{" "}
          ~ Email for information about{" "}
          <span className="underline underline-offset-1 transition-colors ease-in-out duration-500">
            booking a hotel room
          </span>{" "}
          for the conference or any <span>general inquiries</span>.
        </p>
        <p className="font-regular text-[15px]">
          <strong className="hover:text-[royalBlue] transition-colors ease-in-out duration-500 hover:scale-105">
            {" "}
            <Link href={"mailto:web@cusec.net"}>web@cusec.net</Link>
          </strong>{" "}
          ~ Email for information about the{" "}
          <span className="underline underline-offset-1 transition-colors ease-in-out duration-500">
            website
          </span>{" "}
          or{" "}
          <span className="underline underline-offset-1 transition-colors ease-in-out duration-500">
            suggestions
          </span>{" "}
          for improvement.
        </p> */}
      </section>
    </BlueBorderSquareBox>
  );
}

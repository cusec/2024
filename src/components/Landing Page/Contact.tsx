import Link from "next/link";
import BlueBorderSquareBox from "./BlueBorderSquareBox";
import { HiEnvelope } from "react-icons/hi2";

export default function Contact() {
  return (
    <BlueBorderSquareBox>
      <form className="py-16 px-8 md:px-12">
        <h2 className="font-semibold text-[28px] md:text-[40px] tracking-tight">
          Contact Us
        </h2>
        <div className="space-y-6">
          <hr className="block max-w-[3rem] md:max-w-[4rem] h-2 bg-purple-500" />
          <Link
            href={"mailto:info@cusec.net"}
            className="flex transition ease-in-out duration-500 hover:scale-105 group max-w-fit items-center"
          >
            <HiEnvelope className="fill-royalPurple group-hover:fill-royalBlue transition ease-in-out duration-700" />
            <span className="text-[12px] md:text-[16px] font-semibold bg-clip-text text-transparent bg-royalPurple group-hover:bg-royalBlue transition ease-in-out duration-1000">
              &nbsp;info@cusec.net
            </span>
          </Link>

          <p className="text-[12px] md:text-[16px]">
            Leave us a message regarding sponsorship, hotel bookings, or any
            general inquiries related to CUSEC 2024. We&apos;re here to assist
            and appreciate any input or suggestions for further improvement.
          </p>
          {/* Full Name Input */}
          {/* Email Input */}
          {/* Message Input */}

          <div className="flex space-x-4">
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-1/2 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
              placeholder="Full Name*"
              required
            ></input>
            <input
              type="email"
              id="email"
              name="email"
              className="w-1/2 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
              placeholder="Email Address*"
              required
            ></input>
          </div>
          <div className="mt-4">
            <textarea
              id="Message"
              name="Message"
              rows={4}
              className="w-full resize-y outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
              placeholder="Message*"
              required
            ></textarea>
          </div>
        </div>
        <span className="flex justify-center mt-4">
          <button
            type="submit"
            className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white px-3 min-[390px]:px-5 md:px-8 py-2 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-royalBlue tracking-wide transition ease-in-out duration-500 hover:scale-105 hover:bg-royalBlue hover:text-white border-2 border-royalBlue"
          >
            Submit
          </button>
        </span>
      </form>
    </BlueBorderSquareBox>
  );
}

{
  /* Old Content */
}
{
  /* <p className="font-regular text-[15px]">
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
</p> */
}

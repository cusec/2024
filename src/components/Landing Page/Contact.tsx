import Link from "next/link";
import BlueBorderSquareBox from "./BlueBorderSquareBox";

export default function Contact() {

  return (
    <BlueBorderSquareBox>

      <section className="lg:max-w-[1024px] max-w-[768px] space-y-6">
        <p className="font-semibold text-[28px] ">Contact Us</p>
        <p className="font-regular text-[15px]">
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
        </p>
      </section>
    </BlueBorderSquareBox>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function WhyJoin() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="flex items-center font-semibold text-[28px] md:text-[40px] tracking-tight">
        <hr className="block w-2 h-10 bg-orange-300 mr-4" />
        Why Join?
      </h2>
      <div className="flex flex-col items-center">
        <p className="md:text-[24px]">
          Be a part of our 2024 event this January!
        </p>
        <p className="font-semibold text-[20px] md:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot w-fit">
        Register Now⬇
        </p>
        <Link
          className={`drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-royalBlue hover:bg-goldenApricot mx-auto px-5 md:px-10 py-1 mt-3 md:mt-6 text-center rounded-full uppercase md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:text-white`}
          href={`/`}
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}

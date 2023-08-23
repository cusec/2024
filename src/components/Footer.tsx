import { useFadeBackground } from "@/app/layout";

export default function Footer() {
  const fadeBackground = useFadeBackground();
  return (
    <footer
      className={`transition-opacity ease-in-out duration-[1500ms] bg-black/[.85] w-full flex justify-center bg-clip-padding${
        fadeBackground ? "opacity-0" : "opacity-100 text-red"
      }`}
    >
      <section className="py-4 space-x-4">
        <span className="text-white font-[16px]">Privacy</span>
        <span className="text-white font-[16px]">Code of Conduct</span>
      </section>

      <section>
        <span className="">
          
        </span>
      </section>
    </footer>
  );
}

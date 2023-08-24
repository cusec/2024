import { useFadeBackground } from "@/app/layout"

export default function Contact() {
  const fadeBackground = useFadeBackground();

    return (
<div
      className={`transition-opacity ease-in-out duration-[1500ms] ${
        fadeBackground ? "opacity-0" : "opacity-100"
      }`}
    >
    <section className="lg:max-w-[1024px] max-w-[768px] mx-10 mt-14 space-y-6">
        <p className="font-semibold text-[28px] ">Contact Us</p>
        <p className="font-regular text-[15px]">sponsor@cusec.net ~ Email for information about sponsoring the event.</p>
        <p className="font-regular text-[15px]">info@cusec.net ~ Email for information about booking a hotel room for the conference or any general inquiries.</p>
        <p className="font-regular text-[15px]">web@cusec.net ~ Email for information about  the website or suggestions for improvement.</p>
      </section>
    </div>
    )
} 
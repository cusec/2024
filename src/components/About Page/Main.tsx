import { useFadeBackground } from "@/app/layout";

export default function Main(){
 const fadeBackground = useFadeBackground();

  return (
    <div
      className={`transition-opacity ease-in-out duration-[1500ms] ${
        fadeBackground ? "opacity-0" : "opacity-100"
      }`}
    >
        Fueling a journery of knowledge, inspiration, & opportunity for students across Canada
    </div>
    )
}
import { useFadeBackground } from "@/app/layout";

type FadeProps = {
    children: React.ReactNode;
}; 

export default function Fade(props: FadeProps) {
    const fadeBackground = useFadeBackground();

    return(
   <div
      className={`transition-opacity ease-in-out duration-[1500ms] ${
        fadeBackground ? "opacity-0" : "opacity-100"
      }`}
    >
        {props.children}
    </div>     
    )
}
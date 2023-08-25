import Link from "next/link";
import { useFadeBackground } from "@/app/layout";

export default function Faq(){
const fadeBackground = useFadeBackground();

  return (
    <div
      className={`transition-opacity ease-in-out duration-[1500ms] ${
        fadeBackground ? "opacity-0" : "opacity-100"
      }`}
    >

Frequently Asked Questions

<aside className="min-h-screen">
<span>When & Where is CUSEC 2024 happening?</span>
<p><em>When</em>: January 12, 13, and 14</p>
<p><em>Where</em>: Hotel Bonaventure located in Downtown Montreal, QC</p>
</aside>

    </div>
    )
}
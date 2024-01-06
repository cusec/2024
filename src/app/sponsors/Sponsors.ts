import { StaticImageData } from "next/image";

// Structure for each sponsor's information
export interface SponsorLogo {
  src: StaticImageData;
  alt: string;
}

export interface Sponsor {
  name: string;
  logo: SponsorLogo;
  link: string;
  size: "lg" | "md" | "sm" | "xs";
}

// Import all sponsor logos
import rbc_logo from "public/images/sponsor logos/rbc_logo.svg";
import cse_logo from "public/images/sponsor logos/cse_logo.svg";
import kinaxis_logo from "public/images/sponsor logos/kinaxis_logo.svg";
import accenture_logo from "public/images/sponsor logos/accenture_logo.svg";
import fellow_logo from "public/images/sponsor logos/fellow_logo.svg";

export const sponsors: Sponsor[] = [
  {
    name: "RBC",
    logo: { src: rbc_logo, alt: "RBC Logo" },
    link: "https://www.rbcroyalbank.com/personal.html",
    size: "lg"
  },
  {
    name: "CSE",
    logo: { src: cse_logo, alt: "CSE Logo" },
    link: "https://www.cse-cst.gc.ca/",
    size: "md"
  },
  {
    name: "Kinaxis",
    logo: { src: kinaxis_logo, alt: "Kinaxis Logo" },
    link: "https://www.kinaxis.com/en",
    size: "sm"
  },
  {
    name: "Accenture",
    logo: { src: accenture_logo, alt: "Accenture Logo" },
    link: "https://www.accenture.com/",
    size: "xs"
  },
  {
    name: "Fellow",
    logo: { src: fellow_logo, alt: "Fellow Logo" },
    link: "https://fellow.app/",
    size: "xs"
  }
];

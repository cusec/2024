// Structure for each sponsor's information
export interface SponsorLogo {
  src: string; // Changed from StaticImageData to string
  alt: string;
}

export interface Sponsor {
  name: string;
  logo: SponsorLogo;
  link: string;
  size: "lg" | "md" | "sm" | "xs";
}

export const sponsors: Sponsor[] = [
  {
    name: "RBC",
    logo: { src: "/images/sponsor logos/rbc_logo.svg", alt: "RBC Logo" }, // Direct path as a string
    link: "https://www.rbcroyalbank.com/personal.html",
    size: "lg"
  },
  {
    name: "CSE",
    logo: { src: "/images/sponsor logos/cse_logo.svg", alt: "CSE Logo" }, // Direct path as a string
    link: "https://www.cse-cst.gc.ca/",
    size: "md"
  },
  {
    name: "Kinaxis",
    logo: { src: "/images/sponsor logos/kinaxis_logo.svg", alt: "Kinaxis Logo" }, // Direct path as a string
    link: "https://www.kinaxis.com/en",
    size: "sm"
  },
  {
    name: "Accenture",
    logo: { src: "/images/sponsor logos/accenture_logo.svg", alt: "Accenture Logo" }, // Direct path as a string
    link: "https://www.accenture.com/",
    size: "xs"
  },
  {
    name: "Fellow",
    logo: { src: "/images/sponsor logos/fellow_logo.svg", alt: "Fellow Logo" }, // Direct path as a string
    link: "https://fellow.app/",
    size: "xs"
  }
];

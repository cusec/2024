import { StaticImageData } from "next/image";
import Image from "next/image";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";

type TeamCardProps = {
  name: string;
  university: string;
  image: StaticImageData;
  university_image: StaticImageData;
  pronoun: string;
  role: string;
  sub_role?: string; // Optional parameter
  linkedin?: string; // Optional parameter
  instagram?: string; // Optional parameter
  github?: string; // Optional parameter
  website?: string; // Optional parameter
  email: string;
  fun_fact: string;
};

export default function TeamCard(props: TeamCardProps) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[200px] aspect-square rounded-full bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot">
          <Image
            src={props.image}
            alt={props.name}
            className="overflow-none p-6"
          />
        </div>
        <p className="font-semibold">{props.name}</p>
        <p>{props.university}</p>
        <p className="text-[8px] bg-clip-text text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot">
          {props.pronoun}
        </p>
        <p className="text-[12px]">{props.role}</p>
        {/* <p>{props.sub_role}</p>
        <p>{props.linkedin}</p>
        <p>{props.instagram}</p>
        <p>{props.github}</p>
        <p>{props.website}</p>
        <p>{props.email}</p>
        <p>{props.fun_fact}</p> */}

        {/*Pagination circles*/}
        <div>
          <span className="block h-6 rounded-full"></span>
          <span className="block h-6 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

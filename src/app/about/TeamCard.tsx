import { StaticImageData } from "next/image";
import Image from "next/image";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";

type TeamCardProps = {
  name: string;
  university: string;
  //   image?: StaticImageData;
  image?: string;
  university_image?: StaticImageData;
  pronouns: string;
  role: string;
  sub_role?: string; // Optional parameter
  program: string;
  linkedin?: string; // Optional parameter
  instagram?: string; // Optional parameter
  github?: string; // Optional parameter
  website?: string; // Optional parameter
  email: string;
  fun_fact: string;
};

export default function TeamCard(props: TeamCardProps) {
  return (
    <div className="flex flex-col items-center justify-center mx-6 mt-8">
      <div className="aspect-square rounded-full bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot  w-[140px] md:w-[165px] relative">
        {props.image && (
          <Image
            src={props.image}
            alt={"Image of " + props.name}
            // width={140}
            // height={140}
            layout="fill"
            objectFit="cover"
            className="overflow-none p-1"
          />
        )}
      </div>
      <p className="text-center font-semibold md:text-[20px] whitespace-nowrap">
        {props.name}
      </p>
      <p>{props.university}</p>
      <p className="text-center text-[8px] md:text-[12px] bg-clip-text text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot">
        {props.pronouns}
      </p>
      <p className="text-center text-[12px] md:text-[18px] whitespace-nowrap">
        {props.role}
      </p>
      {/* <p>{props.sub_role}</p> */}
      {/* <p>{props.program}</p>
        <p>{props.linkedin}</p>
        <p>{props.instagram}</p>
        <p>{props.github}</p>
        <p>{props.website}</p>
        <p>{props.email}</p>
        <p>{props.fun_fact}</p> */}

      {/*Pagination circles*/}
      <div className="flex space-x-1 mt-8">
        <span className="block h-3 w-3 rounded-full bg-purple-400"></span>
        <span className="block h-3 w-3 rounded-full bg-gray-300"></span>
      </div>
    </div>
  );
}

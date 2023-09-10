import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";

type TeamCardProps = {
  name: string;
  university: string;
  //   image?: StaticImageData;
  image?: string;
  university_image?: string;
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
    <div className="flex flex-col items-center justify-center mx-6 mt-8 group self-start">
      <div className="aspect-square rounded-full bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot w-[140px] md:w-[165px] relative">
        {props.image && (
          <Image
            src={props.image}
            alt={"Image of " + props.name}
            layout="fill"
            objectFit="cover"
            className="overflow-none p-1"
          />
        )}

        {/* TODO: Fix the image clipping issues */}
        <div
          className="absolute rounded-none -top-4 z-100 w-[60px] h-[60px] 
        "
        >
          {props.university_image && (
            <Image
              src={props.university_image}
              alt={"Image of " + props.university}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
      </div>

      {/* <p className="text-center font-semibold md:text-[20px] whitespace-nowrap">
        {props.name}{" "}
      </p> */}

      {/* Replacing text on hover with fade in/out animation */}
      {/* Name and University text */}
      <p className="text-center font-semibold md:text-[20px] whitespace-nowrap relative">
        <div className="inline-block relative">
          <span className="invisible">
            {props.name.length > props.university.length
              ? props.name
              : props.university}
          </span>
          <span className="absolute transition-opacity duration-700 ease-in-out group-hover:opacity-0 top-0 left-1/2 transform -translate-x-1/2">
            {props.name}
          </span>
          <span className="absolute opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 top-0 left-1/2 transform -translate-x-1/2">
            {props.university}
          </span>
        </div>
      </p>

{/* Pronouns and Program text */}
      <p className="text-center whitespace-nowrap relative text-[8px] md:text-[12px]">
        <div className="inline-block relative">
          <span className="invisible">
            {props.pronouns.length > props.program.length
              ? props.pronouns
              : props.program}
          </span>
          <span className="absolute transition-opacity duration-700 ease-in-out group-hover:opacity-0 top-0 left-1/2 transform -translate-x-1/2 bg-clip-text text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot">
            {props.pronouns}
          </span>
          <span className="absolute opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 top-0 left-1/2 transform -translate-x-1/2">
            {props.program}
          </span>
        </div>
      </p>

      <p className="text-center whitespace-nowrap relative">
        <div className="inline-block relative">
          <span className="invisible">
            {props.role.length > props.program.length
              ? props.role
              : props.program}
          </span>
          <span className="absolute transition-opacity duration-700 ease-in-out group-hover:opacity-0 top-0 left-1/2 transform -translate-x-1/2 text-[12px] md:text-[18px]">
            {props.role}
          </span>
          <span className="absolute opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 top-0 left-1/2 transform -translate-x-1/2 text-pink-600 text-[12px] md:text-[16px]">
            Fun Fact
          </span>
        </div>
      </p>

      {/* Role, sub-role, email, and fun fact text */}
      <p className="relative">
        <div className="inline-block relative">
          <span className="invisible">
            {props.role.length > props.program.length
              ? props.role
              : props.program}
          </span>
          <span className="absolute transition-opacity duration-700 ease-in-out group-hover:opacity-0 top-0 left-1/2 transform -translate-x-1/2 text-[12px] md:text-[18px]">
            {props.sub_role && props.email ? (
              <>
                <p className="text-center text-[12px] md:text-[18px] whitespace-nowrap -mt-2 md:-mt-0">
                  <em>{props.sub_role}</em>
                </p>
                <Link
                  href={`mailto:${props.email}`}
                  className="text-[10px] md:text-[14px] text-royalBlue hover:scale-105 transition ease-in-out duration-500"
                >
                  {props.email}
                </Link>
              </>
            ) : props.sub_role ? (
              <>
              <p className="text-center text-[12px] md:text-[18px] whitespace-nowrap -mt-2 md:-mt-0">
                <em>{props.sub_role}</em>
              </p>
              {props.name === "Timothy J. Klint" ? (
                <></>
              ) : (
              <div>
                
              </div>
                )
                }
              </>
            ) : props.email ? (
              <Link
                href={`mailto:${props.email}`}
                className="text-[10px] md:text-[14px] text-royalBlue hover:scale-105 transition ease-in-out duration-500"
              >
                {props.email}
              </Link>
            ) : (
              <>
              </>
            )}
          </span>
          <span className="text-center absolute opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 top-0 left-1/2 transform -translate-x-1/2 text-[8px] md:text-[10px] w-full">
            {props.fun_fact}
          </span>
        </div>
      </p>

      {/* 
        <p>{props.linkedin}</p>
        <p>{props.instagram}</p>
        <p>{props.github}</p>
        <p>{props.website}</p>
        <p>{props.fun_fact}</p> */}

      {/*Pagination circles*/}
      <div className="flex space-x-1 mt-5">
        <span className="block h-3 w-3 rounded-full bg-purple-400 group-hover:bg-gray-300 transition ease-in-out duration-1000"></span>
        <span className="block h-3 w-3 rounded-full bg-gray-300 group-hover:bg-purple-400 transition ease-in-out duration-100"></span>
      </div>
    </div>
  );
}

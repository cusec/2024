import TeamCard from "./TeamCard";
import teamMembers from "./teamMembers.json";

export default function Team() {
  return (
    <>
      <div className="bg-gradient-to-b from-royalPurple via-roseQuartz to-goldenApricot w-fit flex space-x-5 mt-14">
        <div className="w-6 md:w-12 lg:w-14 bg-black/[.65]"></div>
        <h2 className="text-white text-[28px] md:text-[40px] font-semibold bg-black/[.65] py-3 px-7 tracking-tight">
          Meet Our 2024 Team
        </h2>
      </div>

      {/* Render team member cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-24">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            university={member.university}
            // image={member.image}  // You'll need to import or convert these images to StaticImageData
            // university_image={member.university_image}  // Same as above
            pronouns={member.pronouns}
            role={member.role}
            sub_role={member.sub_role}
            program={member.program}
            linkedin={member.linkedin}
            instagram={member.instagram}
            github={member.github}
            website={member.website}
            email={member.email}
            fun_fact={member.fun_fact}
          />
        ))}
      </div>
    </>
  );
}

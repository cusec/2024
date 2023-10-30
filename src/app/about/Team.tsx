import TeamCard from "./TeamCard";
import teamMembers from "./teamMembers.json";
import { motion } from "framer-motion";

const animateInConfig = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.5,
});

const TOTAL_ANIMATION_DURATION = 0.6; // 0.6 seconds for all cards to appear
const STAGGER_DELAY = TOTAL_ANIMATION_DURATION / teamMembers.length;

export default function Team() {
  return (
    <>
      {/* <motion.div
      {...animateInConfig}
      transition = {transitionConfig()}
      className="bg-gradient-to-b from-royalPurple via-roseQuartz to-goldenApricot w-fit flex space-x-5 mt-14">
        <div className="w-6 md:w-12 lg:w-14 bg-black/[.65]"></div>
        <h2 className="text-white text-[28px] md:text-[40px] font-semibold bg-black/[.65] py-3 px-7 tracking-tight">
          Meet Our 2024 Team
        </h2>
      </motion.div> */}

      {/* Render team member cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-24">
        {teamMembers.map((member, index) => (
          <motion.div key={index}
          {...animateInConfig}
          transition={transitionConfig(index * STAGGER_DELAY)}
          >
            <TeamCard
              name={member.name}
              university={member.university}
              image={`/images/team member images/${member.image}`}
              university_image={`/images/university logos/${member.university_image}`}
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
          </motion.div>
        ))}
      </div>
    </>
  );
}

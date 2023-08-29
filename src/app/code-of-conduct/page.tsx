/* eslint-disable react/no-unescaped-entities */
"use client";

import { useFadeBackground } from "@/app/layout";
import Link from "next/link";
import Fade from "@/components/Fade";
import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";

export default function CodeofConduct() {
  return (
    <div className="w-full gradientGridBackground min-h-screen flex justify-center items-center">
      <div className="mx-6 lg:max-w-[1024px] max-w-[768px] lg:mx-24 my-28">
        <Fade>
          <BlueBorderSquareBox>
            <div className={`px-10 lg:px-20 py-8 md:py-20`}>
              <h1 className="font-semibold text-[20px] sm:text-[28px] md:text-[32px]">
                Code of Conduct
              </h1>

              <hr className="block max-w-[3rem] md:max-w-[4rem] h-2 bg-roseQuartz mb-10 mt-3" />

              <p className="font-regular text-[10px] sm:text-[12px] md:text-[16px] my-6">
                All participants of CUSEC are expected to abide by our Code of
                Conduct, both online and during in-person events that are hosted
                and/or associated with CUSEC.
              </p>

              <h2 className="font-semibold text-[24px] mb-2 text-purple-400">
                The Pledge
              </h2>
              <p className="font-regular text-[10px] sm:text-[12px] md:text-[16px] mb-8">
                In the interest of fostering an open and welcoming environment,
                we pledge to make participation in our project and our community
                a harassment-free experience for everyone, regardless of age,
                body size, disability, ethnicity, gender identity and
                expression, level of experience, nationality, personal
                appearance, race, religion, or sexual identity and orientation.
              </p>

              <h2 className="font-semibold text-[24px] mb-2 text-roseQuartz">
                The Standards
              </h2>

              <p className="font-regular text-[10px] sm:text-[12px] md:text-[16px]">
                Examples of behaviour that contributes to creating a positive
                environment include:
              </p>

              <ul className="list-disc pl-8 font-regular text-[10px] sm:text-[12px] md:text-[16px] mb-6">
                <li>Using welcoming and inclusive language.</li>
                <li>
                  Being respectful of differing viewpoints and experiences.
                </li>
                <li>Gracefully accepting constructive criticism.</li>
                <li>
                  Referring to people by their preferred pronouns and using
                  gender-neutral pronouns when uncertain.
                </li>
              </ul>

              <p className="font-regular text-[10px] sm:text-[12px] md:text-[16px]">
                Examples of unacceptable behaviour by participants include:
              </p>

              <ul className="list-disc pl-8 font-regular text-[10px] sm:text-[12px] md:text-[16px] mb-10">
                <li>
                  Trolling, insulting/derogatory comments, public or private
                  harassment.
                </li>
                <li>
                  Publishing others' private information, such as a physical or
                  electronic address, without explicit permission.
                </li>
                <li>
                  Not being respectful to reasonable communication boundaries,
                  such as 'leave me alone,' 'go away,' or 'I’m not discussing
                  this with you.'
                </li>
                <li>
                  The usage of sexualized language or imagery and unwelcome
                  sexual attention or advances.
                </li>
                <li>Swearing, usage of strong or disturbing language.</li>
                <li>
                  Demonstrating the graphics or any other content you know may
                  be considered disturbing.
                </li>
                <li>
                  Starting and/or participating in arguments related to
                  politics.
                </li>
                <li>
                  Assuming or promoting any kind of inequality including but not
                  limited to: age, body size, disability, ethnicity, gender
                  identity and expression, nationality and race, personal
                  appearance, religion, or sexual identity and orientation.
                </li>
                <li>Drug promotion of any kind.</li>
                <li>Attacking personal tastes.</li>
                <li>
                  Other conduct which you know could reasonably be considered
                  inappropriate in a professional setting.
                </li>
              </ul>
              <h2 className="font-semibold text-[24px] text-orange-400 mb-2">
                Enforcement
              </h2>
              <p className="font-regular text-[10px] sm:text-[12px] md:text-[16px] mb-6">
                Violations of the Code of Conduct may be reported by sending an
                email to incidents@cusec.net. All reports will be reviewed and
                investigated and will result in a response that is deemed
                necessary and appropriate to the circumstances. Further details
                of specific enforcement policies may be posted separately. We
                hold the right and responsibility to remove comments or other
                contributions that are not aligned to this Code of Conduct, or
                to ban temporarily or permanently any members for other
                behaviours that they deem inappropriate, threatening, offensive,
                or harmful.
              </p>
              <p className="font-regular text-[10px] sm:text-[12px] md:text-[16px] mb-6">
                Conference staff will be happy to help participants contact
                hotel/venue security or local law enforcement, provide escorts,
                or otherwise assist those experiencing harassment to feel safe
                for the duration of the conference. We value your attendance. We
                expect participants to follow these rules at the conference
                venue as well as any conference-related social events.
              </p>
              <p className="font-regular text-[10px] sm:text-[12px] md:text-[16px]">
                <strong>Email Address:</strong>
                <Link href={"mailto:incidents@cusec.net"}>
                  {" "}
                  <span className="text-royalBlue underline underline-offset-2">incidents@cusec.net</span>
                </Link>
              </p>
              <p className="font-regular text-[10px] sm:text-[12px] md:text-[16px]">
                <strong>Non-Emergency Local Law Enforcement (SPVM):</strong>
                <Link href={"tel:+1-(514)-280-2222"}>{" "}<span className="text-royalBlue underline underline-offset-2">+1-(514)-280-2222</span></Link>
              </p>
              <p className="font-regular text-[10px] sm:text-[12px] md:text-[16px]">
                <strong>Emergency and Urgent Calls:</strong>
                <Link href={"tel:911"}>{" "}<span className="text-royalBlue underline underline-offset-2">911</span></Link>
              </p>
            </div>
          </BlueBorderSquareBox>
        </Fade>
      </div>
    </div>
  );
}

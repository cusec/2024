import Link from "next/link";
import FaqCard from "./FaqCard";
import { motion } from "framer-motion";

function animateInConfig(text: boolean) {
  return {
    initial: { opacity: 0, x: text ? 100 : 0, scale: text ? 1 : 0.8 },
    whileInView: { opacity: 1, x: 0, scale: 1 },
    viewport: { once: true },
  };
}

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.5,
});

export default function Faq() {
  return (
    <>
      <div className="bg-black bg-opacity-60 text-white px-8 overflow-hidden">
        <motion.h2
          {...animateInConfig(true)}
          transition={transitionConfig(0)}
          className="text-[28px] flex justify-center font-semibold py-14 px-10"
        >
          <hr className="block w-2 h-10 bg-purple-500 mr-4" />
          Frequently Asked Questions
        </motion.h2>
        <motion.span
          {...animateInConfig(true)}
          transition={transitionConfig(0.2)}
          className="block max-w-[600px] h-[0.75px] bg-white mb-10 mx-auto"
        ></motion.span>

        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            {...animateInConfig(false)}
            transition={transitionConfig(0.3)}
          >
            <FaqCard
              question="When & Where is CUSEC 2024 happening?"
              content={
                <>
                  <p className="flex">
                    <span className="block">
                      <em>When:&nbsp;</em>
                    </span>
                    <span className="block">January 11, 12, and 13.</span>
                  </p>
                  <p className="flex">
                    <span className="block">
                      <em>Where:&nbsp;</em>
                    </span>
                    <span className="block">
                      <Link
                        href={
                          "https://www.google.com/maps/place/Le+Centre+Sheraton+Montreal+Hotel/@45.4965835,-73.5735774,15.5z/data=!4m9!3m8!1s0x4cc91a42f46cd423:0xce6742b1fed51b6f!5m2!4m1!1i2!8m2!3d45.4979625!4d-73.5716361!16zL20vMDhrbnJm?entry=ttu"
                        }
                        className="hover:text-blue-500 transition ease-in-out duration-500"
                        target="_blank"
                      >
                        Le Centre Sheraton Montreal Hotel - 1201 René-Lévesque
                        Blvd W, Montreal, Quebec H3B 2L7
                      </Link>
                    </span>
                  </p>
                </>
              }
            />
          </motion.div>
          <motion.div
            {...animateInConfig(false)}
            transition={transitionConfig(0.35)}
          >
            <FaqCard
              question="Where can I find the conference schedule, speakers, and sponsors?"
              content={
                <>
                  The schedule will be available on the website soon along with
                  our list of speakers and sponsors! We are working to create
                  the best conference experience for you, we promise.
                </>
              }
            />
          </motion.div>
          <motion.div
            {...animateInConfig(false)}
            transition={transitionConfig(0.4)}
          >
            <FaqCard
              question="Who can attend? Are there any costs?"
              content={
                <>
                  High school, undergraduate and graduate students from all
                  across Canada are welcome to attend. If you are still
                  registered as a student at an educational institution and have
                  not graduated by January 2024, you can buy a student ticket at
                  $80*.
                  <br />
                  <br />
                  Otherwise, the professional ticket is for you! We sell
                  professional tickets at $200*.
                  <br />
                  <br />
                  Please note that tickets <strong>
                    do not include costs
                  </strong>{" "}
                  for travel or accommodations. See the <em>Pricing Plans</em>{" "}
                  section for more information on ticket benefits. <br />
                  <br />
                  *All prices are in CAD.
                </>
              }
            />
          </motion.div>
          <motion.div
            {...animateInConfig(false)}
            transition={transitionConfig(0.45)}
          >
            <FaqCard
              question="How can I get a ticket?"
              content={
                <>
                  Ticket pre-sale for schools with a Head Delegate start on
                  October 23 at 12:00am ET and close November 6 at 11:59pm ET,
                  or until tickets are sold out. Talk with your Head Delegate or
                  school about possible pre-bought tickets for your delegation.
                  <br />
                  <br />
                  General admission will open on November 7 at 12:00am ET and
                  remain open until tickets are sold out.
                </>
              }
            />
          </motion.div>
          <motion.div
            {...animateInConfig(false)}
            transition={transitionConfig(0.5)}
          >
            <FaqCard
              question={`Where should I book my hotel room? How much does it cost?`}
              content={
                <>
                  We’ve worked with Le Centre Sheraton to provide you with great
                  rates on-site during the conference. You may book them{" "}
                  <a
                    href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1698351860401&key=GRP&app=resvlink"
                    target="_blank"
                    className="text-blue-500"
                  >
                    here
                  </a>
                  , at the discounted rate of $200 CAD per room per night for up
                  to 2 adults. You can add up to 2 additional adults for $10 per
                  night per additional person. Note that the extra adult fee has
                  been adjusted to $10 rather than the stated $40 on the
                  confirmation screen. This will be manually adjusted prior to
                  check-in.
                  <br />
                  <br />
                  These rates are good until December 18th, 2023. Please book
                  before then to secure your rate. Please{" "}
                  <a href="mailto:info@cusec.net" className="text-blue-500">
                    contact us
                  </a>{" "}
                  if you have any questions.
                </>
              }
            />
          </motion.div>
          <motion.div
            {...animateInConfig(false)}
            transition={transitionConfig(0.55)}
          >
            <FaqCard
              question="Can I get a refund or resell my ticket?"
              content={
                <>
                  It is strictly forbidden to re-sell a CUSEC ticket above the
                  purchased price. Refunds are available 30 days after purchase
                  or until December 22, 2023 at 11:59 PM (EST), whichever is
                  earlier. <br />
                  <br />
                  If you cannot attend anymore, reach out to{" "}
                  <a
                    href={"mailto:info@cusec.net"}
                    className="hover:text-blue-500 transition ease-in-out duration-500"
                  >
                    info@cusec.net
                  </a>{" "}
                  and CC your head delegate if you have one. We will do our best
                  to assist you.
                </>
              }
            />
          </motion.div>
          <motion.div
            {...animateInConfig(false)}
            transition={transitionConfig(0.55)}
          >
            <FaqCard
              question="Will meals be provided during our stay?"
              content={
                <>Refreshments will be available to delegates that
                  have bought a ticket to attend. Although we will not be
                  providing meals, there are various locations nearby. Here&apos;s a
                  chance to explore Montreal!
                </>
              }
            />
          </motion.div>
        </div>

        <motion.p
          {...animateInConfig(false)}
          transition={transitionConfig(0.6)}
          className="text-center font-medium py-16 md:px-16"
        >
          Don&apos;t see a question you&apos;re looking for?
          <br /> Send us an email at{" "}
          <a
            href={
              "mailto:info@cusec.net?subject=Inquiry:&body=Hello CUSEC team,"
            }
            className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot hover:text-blue-500 transition-colors ease-in-out duration-500"
          >
            info@cusec.net
          </a>
        </motion.p>
      </div>
    </>
  );
}

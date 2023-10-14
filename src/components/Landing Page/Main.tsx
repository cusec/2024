import Image from "next/image";
import Link from "next/link";
import logoPrimaryDark from "src/assets/logo-primary-dark.svg";
import greyEllipse from "src/assets/grey-ellipse.svg";
import BlueBorderSquareBox from "./BlueBorderSquareBox";
import { motion } from "framer-motion";

export default function Landingbox (){
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      viewport={{ once: true }}
    >
      <BlueBorderSquareBox>
        <section className="py-8 px-8 text-center space-y-5 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              bounce: 0.5,
            }}
            viewport={{ once: true }}
          >
            <Image
              src={logoPrimaryDark}
              alt="CUSEC 2024 logo primary dark"
              layout="responsive"
              className="max-w-lg mx-auto"
              priority
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
              type: "spring",
              bounce: 0.5,
            }}
            viewport={{ once: true }}
            className="font-semibold text-[18px] leading-[25px] tracking-wider"
          >
            Canadian University Software Engineering Conference
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.9,
              type: "spring",
              bounce: 0.5,
            }}
            viewport={{ once: true }}
            className="text-[15px] text-[#615757]"
          >
            January 11-13
            <Image
              src={greyEllipse}
              alt="Grey Ellipse Icon"
              className="inline-block mx-3"
            />
            <Link
              href={
                "https://www.google.com/maps/place/Le+Centre+Sheraton+Montreal+Hotel/@45.4965835,-73.5735774,15.5z/data=!4m9!3m8!1s0x4cc91a42f46cd423:0xce6742b1fed51b6f!5m2!4m1!1i2!8m2!3d45.4979625!4d-73.5716361!16zL20vMDhrbnJm?entry=ttu"
              }
              target="_blank"
              className="hover:text-blue-500 transition ease-in-out duration-500"
            >
              Le Centre Sheraton, Montreal, QC
            </Link>
          </motion.p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.2,
                type: "ease-in-out",
                bounce: 0.5,
              }}
              viewport={{ once: true }}
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSekk6WN5YEMg-tRza9SbMTIar_mHFEUQ9jjLIgw8eF3YNmIog/viewform"
              }
              target="_blank"
              className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#AD65E3] px-3 min-[390px]:px-5 md:px-20 py-3 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-goldenApricot hover:text-white"
            >
              Become a Speaker
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.4,
                type: "ease-in-out",
                bounce: 0.5,
              }}
              viewport={{ once: true }}
              href="mailto:sponsor@cusec.net?subject=CUSEC 2024 Sponsorship Information Request"
              className="md:hidden block text-royalBlue font-semibold underline underline-offset-2 decoration-2"
            >
              Interested in Sponsoring?
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.4,
                type: "ease-in-out",
                bounce: 0.5,
              }}
              viewport={{ once: true }}
              href="mailto:sponsor@cusec.net?subject=CUSEC 2024 Sponsorship Information Request"
              className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hidden md:inline bg-[#FDF3FF] border-2 border-royalBlue ml-9 px-[85px] py-3 text-center rounded-full uppercase text-[18px] font-semibold text-royalBlue tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-royalBlue hover:text-white "
            >
              Sponsor
            </motion.a>
          </div>
        </section>
      </BlueBorderSquareBox>
    </motion.main>
  );
};
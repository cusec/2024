import { useState } from "react";
import BlueBorderSquareBox from "./BlueBorderSquareBox";
import { HiEnvelope } from "react-icons/hi2";
import { motion } from "framer-motion";

function animateInConfig(text: boolean) {
  return {
    initial: { opacity: 0, scale: text ? 1 : 0.8, x: text ? 100 : 0 },
    whileInView: { opacity: 1, scale: 1, x: 0 },
    viewport: { once: true },
  };
}

const disabledMessage =
  "The contact form is currently disabled for maintenance. It'll be back soon, we promise :) Meanwhile, you can still send us an email at info@cusec.net.";

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.5,
});

export default function Contact() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    subject: "",
    Message: "",
  });

  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        setData({
          fullName: "",
          email: "",
          subject: "",
          Message: "",
        });
        console.log("Your message has been sent!");
      }

      const resData = await res.json();
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div {...animateInConfig(false)} transition={transitionConfig(0.3)}>
      <BlueBorderSquareBox>
        <motion.form
          {...animateInConfig(false)}
          transition={transitionConfig(0.5)}
          className="py-16 px-8 md:px-12"
        >
          <motion.h2
            {...animateInConfig(true)}
            transition={transitionConfig(0.6)}
            className="font-semibold text-[28px] md:text-[40px] tracking-tight"
          >
            Contact Us
          </motion.h2>
          <div className="space-y-3">
            <motion.hr
              {...animateInConfig(true)}
              transition={transitionConfig(0.7)}
              className="block max-w-[3rem] md:max-w-[4rem] h-2 bg-purple-500"
            />
            <motion.div
              {...animateInConfig(true)}
              transition={transitionConfig(0.8)}
            >
              <a
                href={"mailto:info@cusec.net"}
                className="flex transition ease-in-out duration-500 hover:scale-105 group max-w-fit items-center"
              >
                <HiEnvelope className="fill-royalPurple group-hover:fill-royalBlue transition ease-in-out duration-700" />
                <span className="text-[12px] md:text-[16px] font-semibold bg-clip-text text-transparent bg-royalPurple group-hover:bg-royalBlue transition ease-in-out duration-1000">
                  &nbsp;info@cusec.net
                </span>
              </a>
            </motion.div>

            <motion.p
              {...animateInConfig(true)}
              transition={transitionConfig(0.9)}
              className="text-[12px] md:text-[16px]"
            >
              Leave us a message regarding sponsorship, hotel bookings, or any
              general inquiries related to CUSEC 2024. We&apos;re here to assist
              and appreciate any input or suggestions for further improvement.
            </motion.p>

            {/* Full Name Input */}
            <div className="flex space-x-4">
              <motion.input
                {...animateInConfig(false)}
                transition={transitionConfig(0.9)}
                type="text"
                id="fullName"
                name="fullName"
                className="w-1/2 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                placeholder="Full Name*"
                required
                disabled
              ></motion.input>
              {/* Email Input */}
              <motion.input
                {...animateInConfig(false)}
                transition={transitionConfig(0.9)}
                type="email"
                id="email"
                name="email"
                className="w-1/2 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                placeholder="Your Email Address*"
                required
                disabled
              ></motion.input>
            </div>
            {/* Subject Input */}
            <motion.input
              {...animateInConfig(false)}
              transition={transitionConfig(0.9)}
              type="text"
              id="subject"
              name="subject"
              className="w-full outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
              placeholder="Subject*"
              required
              disabled
            ></motion.input>
            {/* Message Input */}
            <motion.div
              {...animateInConfig(false)}
              transition={transitionConfig(0.9)}
              className="mt-4"
            >
              <textarea
                id="Message"
                name="Message"
                rows={4}
                className="w-full resize-y outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                placeholder="Message*"
                required
                disabled
              ></textarea>
            </motion.div>
          </div>
          <motion.span
            {...animateInConfig(false)}
            transition={transitionConfig(1.1)}
            className="flex justify-center mt-4"
          >
            <button
              type="submit"
              // className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white px-3 min-[390px]:px-5 md:px-8 py-2 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-royalBlue tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-royalBlue hover:text-white border-2 border-royalBlue"
              // onClick={sendEmail}
              className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-gray-400 px-3 min-[390px]:px-5 md:px-8 py-2 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-royalBlue tracking-wide transition ease-in-out duration-500 hover:scale-110 border-2 border-royalBlue"
              onClick={(e) => {
                e.preventDefault();

                alert(disabledMessage); // Display message when clicked
              }}
              // disabled
            >
              Submit
            </button>
          </motion.span>
        </motion.form>
      </BlueBorderSquareBox>
    </motion.div>
  );
}

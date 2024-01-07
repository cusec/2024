import { useState } from "react";
import BlueBorderSquareBox from "./BlueBorderSquareBox";
import { HiEnvelope } from "react-icons/hi2";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function animateInConfig(text: boolean) {
  return {
    initial: { opacity: 0, scale: text ? 1 : 0.8, x: text ? 100 : 0 },
    whileInView: { opacity: 1, scale: 1, x: 0 },
    viewport: { once: true },
  };
}

const transitionConfig = (delay = 0) => ({
  duration: 1.5,
  delay: delay,
  type: "spring",
  bounce: 0.5,
});

// Functionality for the contact form
export default function Contact() {
  // Display a toast notification indicating that the email has been sent
  const notify = (success: boolean) =>
    success
      ? toast.success("Your message has been sent!")
      : toast.error(
          "Your message has not been sent! Please email us directly at info@cusec.net, and also let us know that the contact form is not working."
        );

  const [data, setData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    // Display a toast notification indicating that the email is being sent
    const sendingToastId = toast.info("Sending your message...", {
      autoClose: false, // Prevent the toast from closing automatically
      style: { backgroundColor: '#0569FF' },
    });
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json(); // Get the response data

      // Remove the 'sending' toast
      toast.dismiss(sendingToastId);

      // The request was successful is the message is undefined
      if (resData.message == undefined) {
        setData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
        notify(true);
      } else {
        // If the request was not successful
        // console.log("Your message has not been sent!");
        // console.log(resData.message); // Display error message from the response
        notify(false);
      }
    } catch (error: any) {
      console.log("An error occurred:", error.message);
    }
  };

  return (
    <motion.div {...animateInConfig(false)} transition={transitionConfig(0)}>
      <BlueBorderSquareBox>
        <motion.form
          onSubmit={sendEmail}
          {...animateInConfig(false)}
          transition={transitionConfig(0.1)}
          className="py-16 px-8 md:px-12"
        >
          <motion.h2
            {...animateInConfig(true)}
            transition={transitionConfig(0.2)}
            className="font-semibold text-[28px] md:text-[40px] tracking-tight"
          >
            Contact Us
          </motion.h2>
          <div className="space-y-3">
            <motion.hr
              {...animateInConfig(true)}
              transition={transitionConfig(0.3)}
              className="block max-w-[3rem] md:max-w-[4rem] h-2 bg-purple-500"
            />
            <motion.div
              {...animateInConfig(true)}
              transition={transitionConfig(0.4)}
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
              transition={transitionConfig(0.5)}
              className="text-[12px] md:text-[16px]"
            >
              Leave us a message regarding sponsorship, hotel bookings, or any
              general inquiries related to CUSEC 2024. We&apos;re here to assist
              and appreciate any input or suggestions for further improvement.
            </motion.p>

            {/* Full Name Input */}
            <div className="flex space-x-4">
              <motion.input
                onChange={handleChange}
                {...animateInConfig(false)}
                transition={transitionConfig(0.5)}
                type="text"
                id="fullName"
                name="fullName"
                value={data.fullName}
                className="w-1/2 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                placeholder="Full Name*"
                required
              ></motion.input>

              {/* Email Input */}
              <motion.input
                onChange={handleChange}
                {...animateInConfig(false)}
                transition={transitionConfig(0.5)}
                type="email"
                id="email"
                name="email"
                value={data.email}
                className="w-1/2 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                placeholder="Your Email Address*"
                required
              ></motion.input>
            </div>
            {/* Subject Input */}
            <motion.input
              onChange={handleChange}
              {...animateInConfig(false)}
              transition={transitionConfig(0.5)}
              type="text"
              id="subject"
              name="subject"
              value={data.subject}
              className="w-full outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
              placeholder="Subject*"
              required
            ></motion.input>

            {/* Message Input */}
            <motion.div
              {...animateInConfig(false)}
              transition={transitionConfig(0.5)}
              className="mt-4"
            >
              <textarea
                onChange={handleChange}
                id="message"
                name="message"
                value={data.message}
                rows={4}
                className="w-full resize-y outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                placeholder="Message*"
                required
              ></textarea>
            </motion.div>
          </div>

          <motion.span
            {...animateInConfig(false)}
            transition={transitionConfig(0.6)}
            className="flex justify-center mt-4"
          >
            <button
            aria-label="Submit Button"
              type="submit"
              className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white px-3 min-[390px]:px-5 md:px-8 py-2 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-royalBlue tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-royalBlue hover:text-white border-2 border-royalBlue"
            >
              Submit
            </button>
          </motion.span>
        </motion.form>
      </BlueBorderSquareBox>
      <ToastContainer
        style={{ marginTop: "50px" }} // Offset so that the toast container doesn't overlap the navbar
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </motion.div>
  );
}

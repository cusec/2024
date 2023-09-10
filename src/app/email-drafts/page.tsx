import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";
import Link from "next/link";

export default function EmailDrafts() {
  return (
    <div className="min-h-screen gradientGridBackground flex items-center justify-center">
      <BlueBorderSquareBox>
        <form className="py-16 px-8 md:px-12">
          <h2 className="font-semibold text-[28px] md:text-[40px] tracking-tight">
            Sponsorship Email Draft Tool
          </h2>
          <div className="space-y-6">
            <hr className="block max-w-[3rem] md:max-w-[4rem] h-2 bg-purple-500" />

            <span className="text-[12px] md:text-[16px] font-semibold bg-clip-text text-transparent bg-royalPurple group-hover:bg-royalBlue transition ease-in-out duration-1000">
              adsfasdfafdasdf
            </span>

            <p className="text-[12px] md:text-[16px]">Text here</p>
            {/* Inputs */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <label
                  htmlFor="fullName"
                  className="w-1/3 text-left whitespace-nowrap"
                >
                  Your Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="ml-4 w-1/2 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                  required
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="company_name"
                  className="w-1/3 text-left whitespace-nowrap"
                >
                  Company Name:
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  className="ml-4 w-1/2 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                  required
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="representativeName" className="w-1/3 text-left">
                  Company Representative&apos;s Name:
                </label>
                <input
                  type="text"
                  id="representativeName"
                  name="representativeName"
                  className="ml-4 w-1/2 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                  required
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="company_email"
                  className="w-1/3 text-left whitespace-nowrap"
                >
                  Company Email:
                </label>
                <input
                  type="email"
                  id="company_email"
                  name="company_email"
                  className="ml-4 w-1/2 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                  required
                />
              </div>
            </div>
          </div>
          <span className="flex justify-center mt-4">
            <button
              type="submit"
              className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white px-3 min-[390px]:px-5 md:px-8 py-2 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-royalBlue tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-royalBlue hover:text-white border-2 border-royalBlue"
            >
              Submit
            </button>
          </span>
        </form>
      </BlueBorderSquareBox>
    </div>
  );
}

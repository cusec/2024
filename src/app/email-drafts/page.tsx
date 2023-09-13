"use client";

import BlueBorderSquareBox from "@/components/Landing Page/BlueBorderSquareBox";
import { useState, ChangeEvent, useEffect, useRef} from "react";

export default function EmailDrafts() {
  const initialTemplate = `Hello [REPRESENTATIVE_NAME],

I hope this message finds you well. My name is [YOUR_NAME], and I'm currently the Director of Technology for the Canadian University Software Engineering Conference (CUSEC) 2024.

Since its inception in 2002, CUSEC has stood as a beacon for emerging talent and industry innovation in software engineering. Over the years, we've successfully curated a space where students and professionals can converge to explore the frontiers of software technology. Notably, CUSEC has become the largest student-run software engineering conference in Canada, attracting participants from premier universities nationwide.

We're thrilled to announce that CUSEC will be making its grand return to Montreal from January 4th to 6th, 2024. We're expecting an attendance of over 300 students from Canada's leading educational institutions, offering them a unique platform to engage, learn, and potentially find their next creative or professional endeavor.

We are extending an invitation to [COMPANY_NAME] to become a distinguished sponsor for CUSEC 2024. As a sponsor, you would have the unique opportunity to:
•  Host specialized workshops to showcase your technologies or solutions.
•  Engage directly with delegates at your exclusive booth during our career fair.
•  Elevate your brand presence by sponsoring social events.
•  Gain privileged access to a curated pool of resumes, delegate contact information, and dedicated interview spaces.

Enclosed, you'll find our detailed sponsorship package, which offers a closer look at how we can tailor this partnership to meet your strategic goals. Should you have any questions or require additional information, please do not hesitate to reach out. I'd also be happy to jump on a call to further discuss how we can best meet your needs.

Thank you for considering this sponsorship opportunity. We're excited about the prospect of partnering with [COMPANY_NAME] to make CUSEC 2024 an unforgettable experience for everyone involved. 


Cheers,
[YOUR_NAME]
  `;

  const initialInputValues = {
    YOUR_NAME: "Jaelyn Wickramarachchi",
    COMPANY_NAME: "Tech Company",
    REPRESENTATIVE_NAME: "Recruiter/Representative",
  };

  // State variables
  const [templateText, setTemplateText] = useState<string>(initialTemplate);
  const [resultText, setResultText] = useState<string>("");
  const [inputValues, setInputValues] = useState<{
    YOUR_NAME: string;
    COMPANY_NAME: string;
    REPRESENTATIVE_NAME: string;
  }>(initialInputValues);

  // Function to handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputValues({
      ...inputValues,
      [id]: value,
    });
    updateResultText(templateText, {
      ...inputValues,
      [id]: value,
    });
  };

  // Function to handle template changes
  const handleTemplateChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newTemplateText = e.target.value;
    setTemplateText(newTemplateText);
    updateResultText(newTemplateText, inputValues);
  };

  // Function to update result text
  const updateResultText = (
    template: string,
    values: { [key: string]: string }
  ) => {
    let newResultText = template;
    for (const [key, value] of Object.entries(values)) {
      const replacement = value || `[${key}]`;
      newResultText = newResultText.replace(
        new RegExp(`\\[${key}\\]`, "g"),
        replacement
      );
    }
    setResultText(newResultText);
  };

  // Initialize result text on first render
  useEffect(() => {
    updateResultText(initialTemplate, initialInputValues);
  });

  // Resize textarea to fit content
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [resultText]);

  return (
    // TODO: Refactor code to use extract out common classes
    <div className="min-h-screen gradientGridBackground flex items-center justify-center">
      <div className="my-20">
        <BlueBorderSquareBox>
          <form className="py-16 px-8 md:px-12">
            <h2 className="font-semibold text-[28px] md:text-[40px] tracking-tight">
              Sponsorship Email Draft Tool
            </h2>
            <div className="space-y-6">
              <hr className="block max-w-[3rem] md:max-w-[4rem] h-2 bg-purple-500" />
              <span className="text-[12px] md:text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-orange-600 group-hover:bg-royalBlue transition ease-in-out duration-1000">
                Get that bag💰
              </span>
              {/* Inputs */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <label
                    htmlFor="YOUR_NAME"
                    className="w-1/3 text-left whitespace-nowrap"
                  >
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    id="YOUR_NAME"
                    name="YOUR_NAME"
                    value={inputValues.YOUR_NAME}
                    className="ml-4 w-1/5 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="COMPANY_NAME"
                    className="w-1/3 text-left whitespace-nowrap"
                  >
                    Company Name:
                  </label>
                  <input
                    type="text"
                    id="COMPANY_NAME"
                    name="COMPANY_NAME"
                    value={inputValues.COMPANY_NAME}
                    className="ml-4 w-1/5 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="REPRESENTATIVE_NAME"
                    className="w-1/3 text-left"
                  >
                    Company Representative&apos;s Name:
                  </label>
                  <input
                    type="text"
                    id="REPRESENTATIVE_NAME"
                    name="REPRESENTATIVE_NAME"
                    value={inputValues.REPRESENTATIVE_NAME}
                    className="ml-4 w-1/5 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <label
                  htmlFor="template"
                  className="w-1/3 text-left whitespace-nowrap"
                >
                  Email Template:
                </label>
                <textarea
                  id="template"
                  name="template"
                  className="ml-40 w-full outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                  value={templateText}
                  onChange={handleTemplateChange}
                  required
                />
              </div>
            </div>
            {/* <span className="flex justify-center mt-4">
              <button
                type="submit"
                className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white px-3 min-[390px]:px-5 md:px-8 py-2 text-center rounded-full uppercase text-[14px] md:text-[18px] font-semibold text-royalBlue tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-royalBlue hover:text-white border-2 border-royalBlue"
              >
                Submit
              </button>
            </span> */}
            <div className="mt-10">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <label
                    htmlFor="to"
                    className="w-1/3 text-left whitespace-nowrap"
                  >
                    To:
                  </label>
                  <input
                    type="text"
                    id="to"
                    name="to"
                    className="ml-4 w-1/5 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                    value={""}
                    required
                  />
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="Subject"
                    className="w-1/3 text-left whitespace-nowrap"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="Subject"
                    name="Subject"
                    className="ml-4 w-1/2 outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                    value={
                      "Invitation to Sponsor CUSEC 2024: Empower the Future of Talent in Tech"
                    }
                    required
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <label htmlFor="result_text">Draft text</label>
                <textarea
                  id="result_text"
                  name="result_text"
                  readOnly
                  className="outline-none focus:ring ring-royalPurple rounded-md text-[12px] md:text-[16px] py-1 px-2 border"
                  value={resultText}
                  ref={textAreaRef}
                  style={{ overflow: "hidden" }}
                />
              </div>
            </div>
            <p className="text-[12px] md:text-[16px]">
              <br />
              In the email template, the [YOUR_NAME], [COMPANY_NAME], and
              [REPRESENTATIVE_NAME] variables will be replaced by corresponding
              values from the input fields. <br /> You can modify the template however you want. 😊
            </p>
            <br />
            Planned features:
            <ul className="list-disc">
              <li>
                Integrating it with gmail to automate the draft generation
                process. The email signature should be generated dynamically as
                well.
              </li>
              <li>
                Linking it to the contacts spreasheet to allow the user to simply
                select a company and a contact to email.
              </li>
              <li>
                Integrate authetication to allow users to save their drafts and
                access them later.
              </li>
            </ul>
          </form>
        </BlueBorderSquareBox>
      </div>
    </div>
  );
}

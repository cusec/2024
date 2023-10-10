/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import FaqCard from "./FaqCard";

export default function Faq() {
  return (
    <>
      <div className="bg-black bg-opacity-60 text-white px-8">
        <h2 className="text-[28px] flex justify-center font-semibold py-14 px-10">
          <hr className="block w-2 h-10 bg-purple-500 mr-4" />
          Frequently Asked Questions
        </h2>
        <span className="block max-w-[600px] h-[0.75px] bg-white mb-10 mx-auto"></span>

        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <FaqCard
            question="When & Where is CUSEC 2024 happening?"
            content={
              <>
                <p className="flex">
                  <span className="block">
                    <em>When:&nbsp;</em>
                  </span>
                  <span className="block">January 4, 5, and 6.</span>
                </p>
                <p className="flex">
                  <span className="block">
                    <em>Where:&nbsp;</em>
                  </span>
                  <span className="block">
                    Location details will be released soon.
                  </span>
                </p>
              </>
            }
          />
          <FaqCard
            question="Where can I find the conference schedule, speakers, and sponsors?"
            content={
              <>
                The schedule will be available on the website soon along with
                our list of speakers and sponsors! We are working to create the
                best conference experience for you, we promise.
              </>
            }
          />
          <FaqCard
            question="Who can attend? Are there any costs?"
            content={
              <>
                High school, undergraduate and graduate students from all across
                Canada are welcome to attend. If you are still registered as a
                student at an educational institution and have not graduated by
                January 2024, you can buy a student ticket at $80*.
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
          <FaqCard
            question="How can I get a ticket?"
            content={
              <>
                Ticket pre-sale for schools with a Head Delegate start on
                October 23 at 12:00am ET and close November 6 at 11:59pm ET, or
                until tickets are sold out. Talk with your Head Delegate or
                school about possible pre-bought tickets for your delegation.
                <br />
                <br />
                General admission will open on November 7 at 12:00am ET and
                remain open until tickets are sold out.
              </>
            }
          />
          <FaqCard
            question={`Where should I book my hotel room? How much does it cost?`}
            content={
              <>
                Information about room rates and booking will be released as
                soon as possible. We are working our hardest to provide
                affordable room rates for delegates at our venue.
              </>
            }
          />
          <FaqCard
            question="Can I get a refund or resell my ticket?"
            content={<>It is strictly forbidden to re-sell a CUSEC ticket above the purchased price. If you cannot attend anymore, reach out to info@cusec.net and CC your head delegate if you have one. We will do our best to assist you.</>}
          />
        </div>

        <p className="text-center font-medium py-16 md:px-16">
          Don't see a question you're looking for?
          <br /> Send us an email at{" "}
          <a
            href={
              "mailto:info@cusec.net?subject=Inquiry:&body=Hello CUSEC team,"
            }
            className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot hover:text-blue-500 transition-colors ease-in-out duration-500"
          >
            info@cusec.net
          </a>
        </p>
      </div>
    </>
  );
}

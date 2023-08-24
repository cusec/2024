"use client";

import { useFadeBackground } from "@/app/layout";

export default function Privacy() {
  const fadeBackground = useFadeBackground();

  return (
    <div
      className={`transition-opacity ease-in-out duration-[1500ms] ${
        fadeBackground ? "opacity-0" : "opacity-100"
      } lg:max-w-[1024px] max-w-[768px] mx-auto mt-14 space-y-6 py-10 px-10 flex flex-col justify-center items-center`}
    >
      <h1 className="font-semibold text-[28px] ">Privacy Policy</h1>
      <p className="font-regular text-[15px]">
        Your privacy is important to us. It is CUSEC's policy to respect your
        privacy regarding any information we may collect from you across our
        website, {"https://2023.cusec.net"}, and other sites we own and operate.
        <br />
        <br />
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent. We also let you know why we’re collecting it and
        how it will be used. We only retain collected information for as long as
        necessary to provide you with your requested service. What data we
        store, we’ll protect within commercially acceptable means to prevent
        loss and theft, as well as unauthorized access, disclosure, copying, use
        or modification.
        <br />
        <br />
        We don’t share any personally identifying information publicly or with
        third-parties, except when required to by law. Our website may link to
        external sites that are not operated by us. Please be aware that we have
        no control over the content and practices of these sites, and cannot
        accept responsibility or liability for their respective privacy
        policies. You are free to refuse our request for your personal
        information, with the understanding that we may be unable to provide you
        with some of your desired services. Your continued use of our website
        will be regarded as acceptance of our practices around privacy and
        personal information.
        <br />
        <br />
        If you have any questions about how we handle user data and personal
        information, feel free to contact us. This policy is effective as of 15
        September 2020.
      </p>
    </div>
  );
}

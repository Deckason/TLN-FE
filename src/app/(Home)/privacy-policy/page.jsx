"use client"
import React from "react";
import BelowBanner from "../../../Components/Common/BelowBanner";
import PaymentBar from "../../../Components/HomeComp/PaymentBar";
import Sqcomp from "./square_comp";
import { useGetTermsQuery } from "../../../store/apiSlice";

const Page = () => {
//   const { data: privacyPolicyData, isLoading, isError } = useGetPrivacyPolicy();


//   if (isLoading) {
//     return <div className="text-center">Loading Privacy and Policies...</div>;
//   }

//   if (isError) {
//     return <div className="text-center text-red-500">Failed to load privacy and policy. Please try again later.</div>;
//   }

const privacyPolicyData = [
    {
        "_id": "6722a1ea584bdb64584bf02f",
        "title": "Software Engineer",
        "description": [
            "Your data is securely stored.",
            "Your data is securely stored.",
            "Your data is securely stored.",
            "Your data is securely stored.",
        ]
    },
    {
        "_id": "9a35bf1c283da96482fa01b7",
        "title": "Data Analyst",
        "description": [
            "We do not share your information with third parties.",
            "We do not share your information with third parties.",
            "We do not share your information with third parties.",
            "We do not share your information with third parties.",
        ]
    },
    {
        "_id": "b47f2de8a9c4fd0236859e4d",
        "title": "Product Manager",
        "description": [
            "All user data is encrypted in transit and at rest.",
            "All user data is encrypted in transit and at rest.",
            "All user data is encrypted in transit and at rest.",
            "All user data is encrypted in transit and at rest.",
        ]
    },
    {
        "_id": "c58a2f6db293ca501784fb39",
        "title": "Privacy Specialist",
        "description": [
            "You can opt out of data collection at any time.",
            "You can opt out of data collection at any time.",
            "You can opt out of data collection at any time.",
            "You can opt out of data collection at any time.",
        ]
    },
    {
        "_id": "a18db5429cf7e36b9247a5d1",
        "title": "UX Designer",
        "description": [
            "Your privacy is our priority.", "You can opt out of data collection at any time.",
            "Your privacy is our priority.", "You can opt out of data collection at any time.",
            "Your privacy is our priority.", "You can opt out of data collection at any time.",
            "Your privacy is our priority.", "You can opt out of data collection at any time.",
        ]
    },
]

  return (
    <div>
      <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-5xl py-10">Privacy Policy</h1>
      <div className="flex flex-col align-middle gap-10 px-14 py-5">
        <p>Thank you for choosing to be part of our community at The Language Network ("Company", "we", "us", "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@thelanguagenetwork.co</p>
        <p>When you visit our website https://thelanguagenetwork.co/ (the “Website“), and more generally, use any of our services (the “Services“, which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</p>
        <p>This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as, any related services, sales, marketing or events.</p>
        <strong>Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</strong>
      </div>
      <div className="flex flex-col justify-center items-center p-8 gap-y-10">
        {privacyPolicyData?.map((policy) => (
          <Sqcomp
            key={policy._id}
            title={policy.title}
            minheight={300}
            content={
              <ul className="list-disc pl-6 space-y-6">
                {policy.description?.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            }
          />
        ))}
      </div>
      {/* Help Section */}
      <div className="flex flex-col items-center bg-[#FAFAFA] py-8 px-4 mb-10 text-center space-y-2">
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl">We&apos;re here to help</p>
        <p className="font-medium text-sm sm:text-base md:text-lg">
          Get in touch for any queries or specific needs
        </p>
        <button className="py-2 px-6 bg-primary-color text-white rounded-md text-sm sm:text-base">
          Contact Us
        </button>
      </div>
      {/* Below Banner */}
      <BelowBanner title={"Learning. Simplified."} />
      {/* Payment Bar */}
      <PaymentBar />
    </div>
  );
};

export default Page;

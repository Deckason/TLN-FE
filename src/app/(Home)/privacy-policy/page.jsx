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

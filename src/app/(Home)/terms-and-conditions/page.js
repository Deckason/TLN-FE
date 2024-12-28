"use client";
import React from "react";
import BelowBanner from "../../../Components/Common/BelowBanner";
import PaymentBar from "../../../Components/HomeComp/PaymentBar";
import Sqcomp from "./square_comp";
import { useGetTermsQuery } from "../../../store/apiSlice";

const Terms = () => {
  const { data: termsData, isLoading, isError } = useGetTermsQuery();

  if (isLoading) {
    return <div className="text-center">Loading Terms and Conditions...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Failed to load terms. Please try again later.</div>;
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center p-8 gap-y-10">
        {termsData?.map((term) => (
          <Sqcomp
            key={term._id}
            title={term.title}
            minheight={300}
            content={
              <ul className="list-disc pl-6 space-y-6">
                {term.description.map((desc, index) => (
                  <li key={index}>
                    <div
                      dangerouslySetInnerHTML={{ __html: desc }}
                    />
                  </li>
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

export default Terms;

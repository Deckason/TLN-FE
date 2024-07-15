import React from "react";
import img from "../../../../../Assets/ContentCreators/img.png";
import Image from "next/image";

const Section1 = () => {
  const data = [
    {
      heading: "STEP 1",
      content:
        "Connect with us by filling out our simple application form on the website.",
    },
    {
      heading: "STEP 2",
      content:
        "Our team will promptly reach out to you to discuss potential content ideas and partnership opportunities.",
    },
    {
      heading: "STEP 3",
      content:
        "Start creating and sharing engaging content to enhance language learning with us! ",
    },
  ];
  return (
    <>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 text-center py-10">
        {`  How it works?  `}
      </p>
      <div className="sm:pb-20 pt-8 pb-8">
        <div className="container mx-auto sm:px-16 px-5 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto">
            {data.map((val, index) => {
              return (
                <div key={index} className="flex flex-col items-center ">
                  <div className="flex items-center justify-center h-fit w-full px-8">
                    <Image src={img} className="w-full" alt="Form Image" />
                  </div>
                  <div className="bg-white   rounded-lg border border-primary-color text-xl   mt-5   text-center">
                    <h5 className="bg-primary-color py-3 mb-5 text-white">
                      {val.heading}
                    </h5>
                    <p className="text-gray-600 px-4  my-4 text-center h-fit min-h-32">
                      {val.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;

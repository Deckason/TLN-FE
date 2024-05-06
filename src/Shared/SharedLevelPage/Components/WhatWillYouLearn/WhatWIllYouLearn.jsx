import BookAFreeDemoButton from "@/Shared/BookAFreeDemoButton";
import WhatWillYouLearnCard from "./WhatWillYouLearnCard";

const WhatWIllYouLearn = ({ WhatWIllYouLearn }) => {
  // console.log(WhatWIllYouLearn);
  return (
    <div className=" h-full w-[97%]">
      <h1 className="text-5xl text-center font-bold text-[#1E1E1E] mb-16">
        What will you learn?
      </h1>

      {/* card */}
      <div className="">
        {WhatWIllYouLearn?.map((cardData, i) => (
          <WhatWillYouLearnCard cardData={cardData} i={i} key={i} />
        ))}
      </div>
      <div className="flex justify-center mt-12 w-full">
        <BookAFreeDemoButton />
      </div>
    </div>
  );
};

export default WhatWIllYouLearn;

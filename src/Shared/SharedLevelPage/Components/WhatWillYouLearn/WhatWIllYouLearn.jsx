import BookAFreeDemoButton from "../../../../Shared/BookAFreeDemoButton";
import WhatWillYouLearnCard from "./WhatWillYouLearnCard";
import LevelsStartedBtn from "./../../../../Shared/buttons/levels/LevelsStartedBtn"

const WhatWIllYouLearn = ({ WhatWIllYouLearn }) => {
  // console.log(WhatWIllYouLearn);
  return (
    <div className=" h-full w-[97%]">
      <h1 className="text-black  text-[40px]/[48px] xl:text-[50px]/[60px] 2xl:text-[60px]/[80px] mb-[20px] lg:mb-12 text-center font-bold ">
        What will you learn?
      </h1>

      {/* card */}
      <div className="">
        {WhatWIllYouLearn?.map((cardData, i) => (
          <WhatWillYouLearnCard cardData={cardData} i={i} key={i} />
        ))}
      </div>
      <div className="flex justify-center mt-12 w-full">
        <LevelsStartedBtn />
      </div>
    </div>
  );
};

export default WhatWIllYouLearn;

import { useEffect, useMemo } from "react";
import SubscribeToOur from "../SubscribeToOur";
import Banner from "./Components/Banner/Banner";
import FaqsLanguage from "./Components/FaqsLanguage/FaqsLanguage";
import LanguageLessons from "./Components/Languagelessons/LanguageLessons";
import PaymentBar from "../../Components/HomeComp/PaymentBar";

import SayBonjur from "./Components/SayBonjur/SayBonjur";
import WhatWIllYouLearn from "./Components/WhatWillYouLearn/WhatWIllYouLearn";
import UpcomingBatches from "../UpcomingBatches";

const SharedLevelPage = ({ Data, language }) => {
  let faqs = [];

  if (Data?.Faqs?.length > 0 && Data?.Faqs !== undefined) {
    faqs = Data?.Faqs;
  }

  // rest of your code...

  return (
    <>
      <div className="2xl:max-w-[1680px] lg:mx-10 mx-auto 2xl:mx-[100px]  relative 3xl:mx-auto  flex justify-center items-center flex-col mb-[112px]">
        <Banner BannerData={Data?.BannerData} />
        <WhatWIllYouLearn WhatWIllYouLearn={Data?.WhatWillYouLearn} />
        <UpcomingBatches language={language}/>
      </div>
      <FaqsLanguage FaqsData={faqs} />
      <SayBonjur SayBonjur={Data?.SayBonjur} />
      <LanguageLessons LanguageLesson={Data?.LanguageLesson} />
      <SubscribeToOur />
      <PaymentBar />
    </>
  );
};

export default SharedLevelPage;

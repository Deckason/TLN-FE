"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { FrenchLanguageData } from "./../../../../Utilities/data/french/MainData";

import { useGetFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";
const FrenchPage = () => {
  
  const { data } = useGetFAQsQuery("");
  const [content, setContent] = useState(FrenchLanguageData);
  useEffect(() => {
    if (!data) return;
    const faqData = data.filter(
      (item) => item.language === "French" && item.category === "General"
    );
    const everyData = data.filter(
      (item) =>
        item.language === "French" &&
        item.category === "Everything you need to know"
    );
    setContent((prev) => ({
      ...prev,
      FaqsData: faqData,
      EveryThingYouNeedToKnowAbout: {
        ...prev.EveryThingYouNeedToKnowAbout, // Spread the existing properties
        CardData: everyData, // Update CardData
      },
    }));
  }, [data]);
  return (
    <div>
      <SharedMainLanuagePage Data={content} language={"French"} context={''}/>
    </div>
  );
};

export default FrenchPage;

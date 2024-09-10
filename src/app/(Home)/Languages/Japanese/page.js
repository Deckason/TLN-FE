"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { JapaneseLanguageData } from "./../../../../Utilities/data/japanese/MainData";
import { useGetFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const JapanesePage = () => {
  const { data } = useGetFAQsQuery("");
  const [content, setContent] = useState(JapaneseLanguageData);
  useEffect(() => {
    if (!data) return;
    const faqData = data.filter(
      (item) => item.language === "Japanese" && item.category === "General"
    );
    const everyData = data.filter(
      (item) =>
        item.language === "Japanese" &&
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
      <SharedMainLanuagePage Data={content} language={"Japanese"} context={''}/>
    </div>
  );
};

export default JapanesePage;

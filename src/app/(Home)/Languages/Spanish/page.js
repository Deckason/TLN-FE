"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { SpanishLanguageData } from "./../../../../Utilities/data/spanish/MainData";
import { useGetFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const SpanishPage = () => {
  const { data } = useGetFAQsQuery("");
  const [content, setContent] = useState(SpanishLanguageData);
  useEffect(() => {
    if (!data) return;
    const faqData = data.filter(
      (item) => item.language === "Spanish" && item.category === "General"
    );
    const everyData = data.filter(
      (item) =>
        item.language === "Spanish" &&
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
      <SharedMainLanuagePage Data={content} language={"Spanish"} context={''}/>
    </div>
  );
};

export default SpanishPage;

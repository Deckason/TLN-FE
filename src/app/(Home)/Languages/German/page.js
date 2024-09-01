"use client";
import { GermanLanguageData } from "./../../../../Utilities/data/german/MainData";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { useGetFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const GermanPage = () => {
  const { data } = useGetFAQsQuery("");
  const [content, setContent] = useState(GermanLanguageData);
  useEffect(() => {
    if (!data) return;
    const faqData = data.filter(
      (item) => item.language === "German" && item.category === "General"
    );
    const everyData = data.filter(
      (item) =>
        item.language === "German" &&
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
      <SharedMainLanuagePage Data={content} language={"German"} />
    </div>
  );
};

export default GermanPage;

"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { EnglishLanguageData } from "./../../../../Utilities/data/english/MainData";
import { useGetFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";
const EnglishPage = () => {
  const { data } = useGetFAQsQuery("");

  const [content, setContent] = useState(EnglishLanguageData);
  useEffect(() => {
    if (!data) return;
    const faqData = data.filter(
      (item) => item.language === "English" && item.category === "General"
    );
    const everyData = data.filter(
      (item) =>
        item.language === "English" &&
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
      <SharedMainLanuagePage Data={content} language={"English"} />
    </div>
  );
};

export default EnglishPage;

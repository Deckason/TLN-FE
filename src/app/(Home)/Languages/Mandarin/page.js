"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { MandarinLanguageData } from "./../../../../Utilities/data/mandarin/MainData";
import { useGetFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const MandarinPage = () => {
  const { data } = useGetFAQsQuery("");
  const [content, setContent] = useState(MandarinLanguageData);
  useEffect(() => {
    if (!data) return;
    const faqData = data.filter(
      (item) => item.language === "Mandarine" && item.category === "General"
    );

    const everyData = data.filter(
      (item) =>
        item.language === "Mandarine" &&
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
      <SharedMainLanuagePage Data={content} language={"Mandarin"} />
    </div>
  );
};

export default MandarinPage;

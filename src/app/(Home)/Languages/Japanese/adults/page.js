"use client";
import { useEffect, useState } from "react";
import { useGetFilteredFAQsQuery } from "../../../../../store/apiSlice";

import { data } from "../../../../../Utilities/data/japanese/AdultData";
import React from "react";
import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";

const page = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "Japanese",
    context: "Adult",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "Japanese",
    context: "Adult",
    category: "Everything you need to know",
  });

  const [content, setContent] = useState(data);
  useEffect(() => {
    if (!faqData) return;
    if (!everyData) return;
    setContent((prev) => ({
      ...prev,
      Faqs: faqData,
      EveryThingYouNeedToKnowAbout: {
        ...prev.EveryThingYouNeedToKnowAbout,
        CardData: everyData,
      },
    }));
  }, [faqData, everyData]);
  return (
    <div>
      <SharedAdultsPage
        Data={content}
        language={"Japanese"}
        context={"Adult"}
      />
    </div>
  );
};

export default page;

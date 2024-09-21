"use client";
import { useEffect, useState } from "react";
import { useGetFilteredFAQsQuery } from "../../../../../store/apiSlice";

import SharedStudyAbroad from "../../../../../Shared/SharedStudyAbroad";
import { data } from "../../../../../Utilities/data/mandarin/StudyAbroadData";

const page = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "Mandarin",
    context: "StudyAbroad",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "Mandarin",
    context: "StudyAbroad",
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
      <SharedStudyAbroad
        Data={content}
        language={"Mandarin"}
        context={"StudyAbroad"}
      />
    </div>
  );
};

export default page;

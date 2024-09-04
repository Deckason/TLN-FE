"use client";
import SharedStudyAbroad from "../../../../../Shared/SharedStudyAbroad";
import {data} from "../../../../../Utilities/data/english/StudyAbroadData"
const page = () => {
  return (
    <div>
      <SharedStudyAbroad Data={data} language={"English"}/>
    </div>
  );
};

export default page;

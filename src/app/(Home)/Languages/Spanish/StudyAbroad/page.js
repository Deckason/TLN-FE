"use client";
import SharedStudyAbroad from "../../../../../Shared/SharedStudyAbroad";
import {data} from "../../../../../Utilities/data/spanish/StudyAbroadData"

const page = () => {
  return (
    <div>
      <SharedStudyAbroad Data={data} language={"Spanish"}/>
    </div>
  );
};

export default page;
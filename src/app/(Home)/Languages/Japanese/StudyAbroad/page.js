"use client";
import SharedStudyAbroad from "../../../../../Shared/SharedStudyAbroad";
import {data} from "../../../../../Utilities/data/japanese/StudyAbroadData"

const page = () => {
  return (
    <div>
      <SharedStudyAbroad Data={data} language={"Japanese"}/>
    </div>
  );
};

export default page;

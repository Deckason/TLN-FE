"use client";
import SharedStudyAbroad from "../../../../../Shared/SharedStudyAbroad";
import {data} from "../../../../../Utilities/data/japanese/StudyAbroadData"

const page = () => {
  return (
    <div>
      <SharedStudyAbroad Data={data} language={"Japanese"} context ={"StudyAbroad"}/>
    </div>
  );
};

export default page;

"use client";
import SharedStudyAbroad from "../../../../../Shared/SharedStudyAbroad";
import {data} from "../../../../../Utilities/data/french/StudyAbroadData"

const page = () => {
  return (
    <div>
      <SharedStudyAbroad Data={data} language={"French"} context ={"StudyAbroad"}/>
    </div>
  );
};

export default page;

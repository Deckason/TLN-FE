"use client";
import SharedStudyAbroad from "../../../../../Shared/SharedStudyAbroad";
import {data} from "../../../../../Utilities/data/mandarin/StudyAbroadData"

const page = () => {

  return (
    <div>
      <SharedStudyAbroad Data={data} language={"Mandarin"}/>
    </div>
  );
};

export default page;

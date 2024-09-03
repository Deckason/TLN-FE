import {data} from "../../../../../Utilities/data/french/AdultData"
import React from "react";
import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";
const page = () => {
  return (
    <div>
     <SharedAdultsPage Data={data} language={"French"}/>
    </div>
  );
};
export default page;
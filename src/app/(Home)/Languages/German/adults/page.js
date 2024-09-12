import {data} from "../../../../../Utilities/data/german/AdultData"
import React from "react";
import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";

const page = () => {
  return (
    <div>
     <SharedAdultsPage Data={data} language={"German"} context ={"Adult"}/>
    </div>
  );
};
export default page;
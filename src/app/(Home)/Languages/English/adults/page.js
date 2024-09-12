import React from "react";
import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";
import {AdultsData} from "../../../../../Utilities/data/english/AdultData"
const page = () => {
  return (
    <div>
      <SharedAdultsPage Data={AdultsData} language={"English"} context ={"Adult"}/>
    </div>
  );
};
export default page;
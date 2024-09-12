import {data} from "../../../../../Utilities/data/japanese/AdultData"
import React from "react";
import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";

const page = () => {
  
  return (
    <div>
     <SharedAdultsPage Data={data} language={"Japanese"} context ={"Adult"}/>
    </div>
  );
};

export default page;

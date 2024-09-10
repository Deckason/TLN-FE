import { data } from "../../../../../Utilities/data/korean/AdultData";
import React from "react";
import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";

const page = () => {
  return (
    <div>
      <SharedAdultsPage Data={data} language={"Korean"} context ={"Adult"}/>
    </div>
  );
};

export default page;

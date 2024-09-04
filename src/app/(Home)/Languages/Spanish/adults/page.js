import { data } from "../../../../../Utilities/data/spanish/AdultData";
import React from "react";
import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";

const page = () => {
  return (
    <div>
      <SharedAdultsPage Data={data} language={"Spanish"} />
    </div>
  );
};

export default page;

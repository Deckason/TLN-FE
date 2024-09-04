import { data } from "../../../../../Utilities/data/mandarin/AdultData";
import React from "react";
import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";

const page = () => {
  return (
    <div>
      <SharedAdultsPage Data={data} language={"Mandarin"} />
    </div>
  );
};

export default page;
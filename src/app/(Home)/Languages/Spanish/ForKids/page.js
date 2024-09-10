import SharedKidsPage from "../../../../../Shared/SharedKidsPage";

import {data} from  "../../../../../Utilities/data/spanish/KidData"

const SpanishForKidsPage = () => {

  return (
    <div>
      <SharedKidsPage Data={data} language={"English"} context={"Kids"}/>
    </div>
  );
};

export default SpanishForKidsPage;

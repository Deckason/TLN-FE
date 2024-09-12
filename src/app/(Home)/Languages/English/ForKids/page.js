import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import {data} from  "../../../../../Utilities/data/english/KidData"
const EnglishForKidsPage = () => {

  return (
    <div>
      <SharedKidsPage Data={data} language={"English"} context={"Kids"}/>
    </div>
  );
};

export default EnglishForKidsPage;

import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import { data } from "../../../../../Utilities/data/japanese/KidData";
const JapaneseForKidsPage = () => {
  return (
    <div>
      <SharedKidsPage Data={data} language={"Japanese"} context={"Kids"}/>
    </div>
  );
};
export default JapaneseForKidsPage;
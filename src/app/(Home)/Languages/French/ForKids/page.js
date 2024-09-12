import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import {data} from  "../../../../../Utilities/data/french/KidData"
const FrenchForKidsPage = () => {
  return (
    <div>
      <SharedKidsPage Data={data} language={"French"} context={"Kids"}/>
    </div>
  );
};

export default FrenchForKidsPage;

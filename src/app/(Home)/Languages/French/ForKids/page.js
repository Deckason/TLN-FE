import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import {data} from  "../../../../../Utilities/data/french/KidData"
const FrenchForKidsPage = () => {
  return (
    <div>
      <SharedKidsPage Data={data} language={"French"}/>
    </div>
  );
};

export default FrenchForKidsPage;

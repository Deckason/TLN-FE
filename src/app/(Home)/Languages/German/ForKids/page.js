import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import {data} from  "../../../../../Utilities/data/german/KidData"

const GermanForKidsPage = () => {
  return (
    <div>
      <SharedKidsPage Data={data} language={"German"} />
    </div>
  );
};

export default GermanForKidsPage;

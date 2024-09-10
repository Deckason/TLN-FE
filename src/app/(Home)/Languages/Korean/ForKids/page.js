import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import {data} from  "../../../../../Utilities/data/korean/KidData"

const KoreanForKidsPage = () => {

  return (
    <div>
      <SharedKidsPage Data={data} language={"Korean"} context={"Kids"}/>
    </div>
  );
};

export default KoreanForKidsPage;

import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import {data} from  "../../../../../Utilities/data/mandarin/KidData"
const MandarinForKidsPage = () => {
  return (
    <div>
      <SharedKidsPage Data={data} language={"Mandarin"} context={"Kids"}/>
    </div>
  );
};

export default MandarinForKidsPage;

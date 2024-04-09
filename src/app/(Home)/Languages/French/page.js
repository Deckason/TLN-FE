import UpcomingBatches from "@/Shared/UpcomingBatches";
import FrenchPageMainBanner from "./Components/FrenchPageMainBanner";
import StudentsTestomony from "@/Shared/StudentsTestomony";
import WhyLearnFrench from "./Components/WhyLearnFrench";

const FrenchPage = () => {
  return (
    <div>
      <FrenchPageMainBanner />

      <WhyLearnFrench />
      <UpcomingBatches />
      <StudentsTestomony />
    </div>
  );
};

export default FrenchPage;

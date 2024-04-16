import UpcomingBatches from "@/Shared/UpcomingBatches";
import FrenchPageMainBanner from "./Components/FrenchPageMainBanner";
import StudentsTestomony from "@/Shared/StudentsTestomony";
import WhyLearnFrench from "./Components/WhyLearnFrench";
import FrenchClassesForAnyLevel from "./Components/FrenchClassesForAnyLevel/FrenchClassesForAnyLevel";

const FrenchPage = () => {
  return (
    <div>
      <FrenchPageMainBanner />
      <FrenchClassesForAnyLevel />
      <WhyLearnFrench />
      <UpcomingBatches />
      <StudentsTestomony />
    </div>
  );
};

export default FrenchPage;

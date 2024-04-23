import UpcomingBatches from "@/Shared/UpcomingBatches";
import MandarinClassesForAnyGoal from "./Components/MandarinClassesForAnyGoal/MandarinClassesForAnyGoal";
import MandarinClassesForAnyLevel from "./Components/MandarinClassesForAnyLevel/MandarinClassesForAnyLevel";
import MandarinPageMainBanner from "./Components/MandarinPageMainBanner";
import OnlineMandarinClass from "./Components/OnlineMandarinClass/OnlineMandarinClass";
import PreapareForMandarinExam from "./Components/PreapareForMandarinExam/PreapareForMandarinExam";
import SayNǐhǎo from "./Components/SayNǐ hǎo/SayNǐhǎo";
import WhyLearnMandarin from "./Components/WhyLearnMandarin";
import StudentsTestomony from "@/Shared/StudentsTestomony";
import FaqsMandarin from "./Components/FaqsMandarin/FaqsMandarin";
import EverythingYouNeedToKnowAboutMandarin from "./Components/EverythingYouNeedToKnowAboutMandarin/EverythingYouNeedToKnowAboutMandarin";
import LanguageLessons from "./Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";

const MandarinPage = () => {
  return (
    <div>
      {" "}
      <MandarinPageMainBanner />
      <OnlineMandarinClass />
      <MandarinClassesForAnyGoal />
      <PreapareForMandarinExam />
      <MandarinClassesForAnyLevel />
      <WhyLearnMandarin />
      <UpcomingBatches />
      <StudentsTestomony />
      <FaqsMandarin />
      <EverythingYouNeedToKnowAboutMandarin />
      <SayNǐhǎo />
      <LanguageLessons />
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default MandarinPage;

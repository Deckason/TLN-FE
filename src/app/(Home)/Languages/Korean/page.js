import UpcomingBatches from "@/Shared/UpcomingBatches";
import KoreanClassesForAnyGoal from "./Components/KoreanClassesForAnyGoal/KoreanClassesForAnyGoal";
import KoreanClassesForAnyLevel from "./Components/KoreanClassesForAnyLevel/KoreanClassesForAnyLevel";
import KoreanPageMainBanner from "./Components/KoreanPageMainBanner";
import OnlineKoreanClass from "./Components/OnlineKoreanClass/OnlineKoreanClass";
import PreapareForKoreanExam from "./Components/PreapareForKoreanExam/PreapareForKoreanExam";
import WhyLearnKorean from "./Components/WhyLearnKorean";
import StudentsTestomony from "@/Shared/StudentsTestomony";
import FaqsKorean from "./Components/FaqsKorean/FaqsKorean";
import EverythingYouNeedToKnowAboutKorean from "./Components/EverythingYouNeedToKnowAboutKorean/EverythingYouNeedToKnowAboutKorean";
import SayAnnyeonghaseyo from "./Components/SayAnnyeonghaseyo/SayAnnyeonghaseyo";
import LanguageLessons from "./Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";

const KoreanPage = () => {
  return (
    <div>
      <KoreanPageMainBanner />
      <OnlineKoreanClass />
      <KoreanClassesForAnyGoal />
      <PreapareForKoreanExam />
      <KoreanClassesForAnyLevel />
      <WhyLearnKorean />
      <UpcomingBatches />
      <StudentsTestomony />
      <FaqsKorean />
      <EverythingYouNeedToKnowAboutKorean />
      <SayAnnyeonghaseyo />
      <LanguageLessons />
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default KoreanPage;

import CefrLevels from "@/Components/HomeComp/CefrLevels";
import CoursesWeOffer from "@/Components/HomeComp/CoursesWeOffer";
import FluencyCarrerCulture from "@/Components/HomeComp/FluencyCarrerCulture";
import HomeBanner from "@/Components/HomeComp/HomeBanner";
import Newsletter from "@/Components/HomeComp/Newsletter";
import OurAlumni from "@/Components/HomeComp/OurAlumni";
import ProficiencyExams from "@/Components/HomeComp/ProficiencyExams";
import TechersInfo from "@/Components/HomeComp/TechersInfo";
import WhyShould from "@/Components/HomeComp/WhyShould";
import States from "@/Shared/States";
import StudentsTestomony from "@/Shared/StudentsTestomony";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import UpcomingBatches from "@/Shared/UpcomingBatches";
import Experiment from "@/Utilities/Experiment";

export default function Home() {
  return (
    <section>
      <HomeBanner />
      <Newsletter />
      <Experiment />
      <WhyShould />
      <CoursesWeOffer />
      <UpcomingBatches />
      <CefrLevels />
      <ProficiencyExams />
      <FluencyCarrerCulture />
      <StudentsTestomony />
      <TechersInfo />
      <OurAlumni />
      <SubscribeToOur />
      {/* here used shared components are : studentsTestomony, subscribeToOur, upcomingBatches */}
    </section>
  );
}

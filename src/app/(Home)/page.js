import CefrLevels from "@/Components/HomeComp/CefrLevels";
import Contact from "@/Components/HomeComp/Contact";
import CoursesWeOffer from "@/Components/HomeComp/CoursesWeOffer";
import EducationPartners from "@/Components/HomeComp/EducationPaterners";
import FluencyCarrerCulture from "@/Components/HomeComp/FluencyCarrerCulture";
import HomeBanner from "@/Components/HomeComp/HomeBanner";
import HomeFooter from "@/Components/HomeComp/HomeFooter";
import Newsletter from "@/Components/HomeComp/Newsletter";
import OurAlumni from "@/Components/HomeComp/OurAlumni";
import PaymentBar from "@/Components/HomeComp/PaymentBar";
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
      <Contact />
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
      <EducationPartners />
      <SubscribeToOur />
      <PaymentBar />
      {/* <HomeFooter/> */}
      {/* here used shared components are : studentsTestomony, subscribeToOur, upcomingBatches */}
    </section>
  );
}

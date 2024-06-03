import CefrLevels from "@/Components/HomeComp/CefrLevels";
import Contact from "@/Shared/Contact";
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
    <>
      <section className="2xl:max-w-[1680px] lg:mx-10 mx-auto 2xl:mx-[100px]  relative 3xl:mx-auto  flex justify-center items-center flex-col ">
        <HomeBanner />
        <Contact />

        {/* 
    
    
    
    <CoursesWeOffer /> */}
        {/* <UpcomingBatches /> */}
        {/* <CefrLevels />
    <ProficiencyExams />
    <FluencyCarrerCulture />
    <StudentsTestomony />
    <TechersInfo />
    <OurAlumni />
    <EducationPartners />
    <SubscribeToOur />
    <PaymentBar /> */}
        {/* <HomeFooter/> */}
        {/* here used shared components are : studentsTestomony, subscribeToOur, upcomingBatches */}
      </section>
      <Newsletter />
      <section className="2xl:max-w-[1680px] lg:mx-10 mx-auto 2xl:mx-[100px]  relative 3xl:mx-auto  flex justify-center items-center flex-col ">
        <WhyShould />
      </section>
    </>
  );
}

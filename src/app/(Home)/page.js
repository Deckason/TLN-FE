import CefrLevels from "../../Components/HomeComp/CefrLevels";
import Contact from "../../Shared/Contact";
import CoursesWeOffer from "../../Components/HomeComp/CoursesWeOffer";
import EducationPartners from "../../Components/HomeComp/EducationPaterners";
import FluencyCarrerCulture from "../../Components/HomeComp/FluencyCarrerCulture";
import HomeBanner from "../../Components/HomeComp/HomeBanner";
import Newsletter from "../../Components/HomeComp/Newsletter";
import OurAlumni from "../../Components/HomeComp/OurAlumni";
import PaymentBar from "../../Components/HomeComp/PaymentBar";
import ProficiencyExams from "../../Components/HomeComp/ProficiencyExams";
import TechersInfo from "../../Components/HomeComp/TechersInfo";
import WhyShould from "../../Components/HomeComp/WhyShould";
import UpcomingBatches from "../../Shared/UpcomingBatches";
import StudentsTestomony from "../../Shared/SharedMainLanguagePage/Components/StudentTestomony/StudentsTestomony";
import SubscribeToOur from "../../Shared/SubscribeToOur";

export default function Home() {
  return (
    <>
      <section className="2xl:max-w-[1680px] lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px] mx-auto relative flex justify-center items-center flex-col ">
        <HomeBanner />
        <Contact />
      </section>
      <Newsletter />
      <WhyShould />
      <CoursesWeOffer />
      <section className="-mt-[50px] lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px]">
        <UpcomingBatches language={"English"} />
      </section>
      <CefrLevels />
      <section className="mx-4 lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px]">
        <ProficiencyExams />
      </section>
      <FluencyCarrerCulture />
      <StudentsTestomony />
      <TechersInfo />
      <div className="mt-[40px] lg:-mt-[40px]">
        <OurAlumni />
      </div>
      <div className="pb-[25px]">
        <EducationPartners />
      </div>
      <SubscribeToOur />
      <PaymentBar />
    </>
  );
}

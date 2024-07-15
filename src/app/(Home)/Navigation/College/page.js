import WhyNeeded from "../components/whyNeeded/WhyNeeded";
import Newsletter from "../../../../Components/HomeComp/Newsletter";
import Contact from "../../../../Shared/Contact";
import Banner from "../components/Banner";
import bannerImg from "../../../../Assets/college/Banner.png"
import collegeWhyCardInfo from "./data/collegeWhyCardInfo"
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs"
import HowItWorks from "../components/HowItWorks";
import howItWorksData from "../College/data/howItWorksData"

const CollegePage = () => {
  return (
    <div className="">
      <section className="relative flex flex-col mx-auto">
        <Contact />
      </section>
      <div className="flex flex-col items-center justify-between mx-4 lg:mx-[44px] 2xl:mx-[88px] 3xl:mx-[96px] 4xl:mx-[120px] 2xl:max-w-[1680px]">
        <Banner bannerImg={bannerImg}/>
      </div>
      <WhyNeeded institute={"Colleges"} cardInfo={collegeWhyCardInfo}/>
      <Newsletter />
      <WhyChooseUs />
      {/* How it works */}
      <HowItWorks data={howItWorksData}/>
      {/* 3 plans */}
    </div>
  );
};

export default CollegePage;

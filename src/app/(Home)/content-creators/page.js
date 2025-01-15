'use client'
import Heading from '../../../Components/Common/Heading';
import SliderComp from '../../../Components/Common/SliderComp';
import PaymentBar from '../../../Components/HomeComp/PaymentBar';
import Banner from '../../../Shared/Banner'
import FaqComp from '../../../Shared/FaqComp';
import "swiper/css";
import "swiper/css/pagination";
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import DynamicForm from '../../../Components/Common/DynamicForm';
import StyledSlider from '../../../Components/Common/StyledSlider'
import BannerImg from '../../../Assets/ContentCreators/header_image.png'
import FormImg from '../../../Assets/ContentCreators/form.png'
import { useGetBannerQuery,useGetAllCommunityQuery,useGetFilteredFAQsQuery} from "../../../store/apiSlice"
import HowItWorks from '../../../Shared/SharedAdultsPage/Components/HowItWorks';
import step1 from "../../../Assets/FrenchPage/FrenchAdult/Rectangle 477.png";
import step2 from "../../../Assets/FrenchPage/FrenchAdult/Rectangle 478.png";
import step3 from "../../../Assets/FrenchPage/FrenchAdult/Rectangle 479.png";

const FormComponent = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <form className="bg-white  rounded-lg  w-full  space-y-4 ">
        {/* Full Name and Contact No. */}
        <div className="flex gap-4 flex-col md:flex-row">
          <input
            type="text"
            placeholder="Your Full Name"
            className="flex-1 w-full border focus:outline-none focus:ring-2 focus:ring-teal-500 px-[16px] py-[11px] rounded-[8px] border-[#BDBDBD] "
          />
          <input
            type="text"
            placeholder="Contact No."
            className="flex-1 w-full border focus:outline-none focus:ring-2 focus:ring-teal-500 px-[16px] py-[11px] rounded-[8px] border-[#BDBDBD] "
          />
        </div>

        {/* Email Address */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full  border focus:outline-none focus:ring-2 focus:ring-teal-500 px-[16px] py-[11px] rounded-[8px] border-[#BDBDBD] "
        />

        {/* Instagram Username */}
        <input
          type="text"
          placeholder="Instagram Username"
          className="w-full  border focus:outline-none focus:ring-2 focus:ring-teal-500 px-[16px] py-[11px] rounded-[8px] border-[#BDBDBD] "
        />

        <div className='w-full flex justify-center md:justify-start'>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-[79px] md:w-[215px] self-center px-[16px] md:px-[32px] py-[10px] md:py-[14px] text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};



const SlideComponent = ({slide})=>{
  const [isPlaying, setIsPlaying] = useState(false);
  

  const handlePlayClick = () => {
      setIsPlaying(true);
  };
    return   (
      <div className="relative w-[287px] md:w-[283px] h-[478px] md:h-[471px] rounded-[3px]">
          {!isPlaying ? (
              <>
                
                  <img src={slide.thumbnail} alt={"video tumbnail"} className="w-full md:w-[283px] h-[478px] md:h-[471px] object-cover relative z-0 rounded-[3px]" />
                 
                  <div className="absolute inset-0 bg-[#00000033] z-10 rounded-[3px]"></div>
                
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center z-20 w-[55px] h-[55px]">
                      <button onClick={handlePlayClick} className="bg-white rounded-full p-[12px] w-full h-full flex justify-center items-center">
                          <FaPlay className="text-black" />
                      </button>
                  </div>
              </>
          ) : (
              
              <video className="w-full md:w-[283px] h-[478px] md:h-[471px] object-cover rounded-[3px]" controls autoPlay>
                  <source src={slide.video} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          )}
          </div>
    );
};


const BelowBanner = ({ title }) => {
    return (
      <div className="text-[20px] md:text-[40px] bg-primary-color text-white px-[100px] py-[50px] md:px-[250px] md:py-[130px] font-extrabold text-center overflow-hidden">
        <span className="hover-animation">{title}</span>
        <style jsx>{`
          .hover-animation {
            display: inline-block;
            font-size: 40px; 
            opacity: 1; 
            transform: translateY(0);
            transition: opacity 0.5s ease; 
          }
  
          .hover-animation:hover {
            animation: hoverEffectIn 0.2s ease forwards; 
          }
  
          .hover-animation {
            animation: hoverEffectOut 0.8s ease forwards;
          }
  
        
          @keyframes hoverEffectIn {
            0% {
              transform: translateY(0);
              font-size: 40px;         
              opacity: 1;          
            }
            100% {
              font-size: 60px;         
              transform: translateY(-5px); 
              opacity: 0.9;            
            }
          }
  
        
          @keyframes hoverEffectOut {
            0% {
              font-size: 60px; 
              transform: translateY(-5px); 
              opacity: 0.9; 
            }
              50% {
              font-size: 45px;
              transform: translateY(-5px);
              opacity: 0.2; 
            }
            100% {
              font-size: 40px;
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  };
  
const ContentCreatorPage = ()=>{

    const {data:communityData}=useGetAllCommunityQuery();
    
   
    const { data } = useGetBannerQuery({
        context: "ContentCreator",
        language: "Others", 
      });
      const { data: faqData } = useGetFilteredFAQsQuery({
        language: "Others",
        context: "ContentCreator",
        category: "General",
      });
    
    const howItWorksData = [
            {
                id:1,
                img:step1,
                description:"Connect with us by filling out our simple application form on the website. "
            },
            {
                id:2,
                img:step2,
                description:"Our team will promptly reach out to you to discuss potential content ideas and partnership opportunities. "
            },
            {
                id:3,
                img:step3,
                description:"Start creating and sharing engaging content to enhance language learning with us! "
            },
        ]
    

    return (
        <div>
            {/* hero section */}
            {
               data && data.length > 0 &&    <Banner title={data[0]?.bannerTitle|| "title"} 
               description={data[0]?.bannerDescription}   buttonText={data[0]?.buttonText} imageSrc={data[0]?.bannerImage}/>
            }
         
            {/* community section */}.
            <div className='mb-[112px] px-0 md:px-[10px] '>
                <Heading title={"Our community"}/>
                <StyledSlider slidesData={communityData}>
                    <SlideComponent/>
                </StyledSlider>
            </div>
            {/* how it works section */}
            {/* <SliderComp data={howItWorksData}/> */}
            <HowItWorks HowItWorksCardData={howItWorksData}/>
            {/* faq section */}
            <FaqComp FaqsData={faqData}/>
            {/* start your journey form */}
            <div className='flex flex-col items-center mt-[100px] mb-[62px]'>
                <Heading title={"Start Your Journey "}/>
                <DynamicForm showAttachCV={false} showTextarea={false} imageSrc={FormImg} showSubmitBtn={false}>
                    <FormComponent/>
                </DynamicForm>
            </div>
            {/* below banner */}
            <BelowBanner title={"Spread the joy of learning with us!"}/>
            {/* payment bar */}
            <PaymentBar/>
        </div>
    )
}

export default ContentCreatorPage;
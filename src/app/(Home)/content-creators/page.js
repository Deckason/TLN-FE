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
import { useGetBannerQuery,useGetAllCommunityQuery} from "../../../store/apiSlice"

const FormComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <form className="bg-white p-6 rounded-lg shadow-md w-full  space-y-4">
        {/* Full Name and Contact No. */}
        <div className="flex gap-4 flex-col md:flex-row">
          <input
            type="text"
            placeholder="Your Full Name"
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="Contact No."
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Email Address */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        {/* Instagram Username */}
        <input
          type="text"
          placeholder="Instagram Username"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Submit
        </button>
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
      <div className="relative">
          {!isPlaying ? (
              <>
                
                  <img src={slide.thumbnail} alt={"video tumbnail"} className="w-full h-92 object-cover relative z-0" />
                 
                  <div className="absolute inset-0 bg-[#00000033] z-10"></div>
                
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center z-20">
                      <button onClick={handlePlayClick} className="bg-white rounded-full p-2">
                          <FaPlay className="text-black" />
                      </button>
                  </div>
              </>
          ) : (
              
              <video className="w-full h-92 object-cover" controls autoPlay>
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
    const [currentPage, setCurrentPage] = useState(0);
    
    const {data:communityData}=useGetAllCommunityQuery();
    
   
    const { data } = useGetBannerQuery({
        context: "ContentCreator",
        language: "Others", 
      });
    
    const navigationPrevRef = React.useRef(currentPage);
     const navigationNextRef = React.useRef(currentPage);
    const howItWorksData = {
        Title:"How It Works?",
        CardData:[
            {
                img:"",
                title:"STEP 1",
                description:"Connect with us by filling out our simple application form on the website. "
            },
            {
                img:"",
                title:"STEP 2",
                description:"Our team will promptly reach out to you to discuss potential content ideas and partnership opportunities. "
            },
            {
                img:"",
                title:"STEP 3",
                description:"Start creating and sharing engaging content to enhance language learning with us! "
            },
        ]
    }
    const faqData = [
        {
            "_id": "6662a3c2834d6cb1800b9495",
            "question": "Why learn with The Language Network?",
            "answer": "Learn with us for personalised instruction, flexible scheduling, and immersive learning experiences tailored to your specific needs. Our expert tutors offer 1:1 and small group classes, ensuring personalised attention and effective learning. Additionally, we provide recordings of classes for your convenience and offer free study material worth ₹10,000+ to support your language learning journey.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-07T06:08:02.346Z",
            "updatedAt": "2024-06-07T06:08:02.346Z",
            "__v": 0
        },
        {
            "_id": "6662a7a4834d6cb1800b94b5",
            "question": "Will I get a certificate after completing each level?",
            "answer": "Yes, you will receive a certificate upon completion of each level. We, as a language school are ISO-certified and our certificates are PAN India recognised. We also prepare for language proficiency exams, the certificates for which are recognised worldwide.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-07T06:24:36.882Z",
            "updatedAt": "2024-06-07T06:24:36.882Z",
            "__v": 0
        },
        {
            "_id": "6662fc72834d6cb1800b94ff",
            "question": "What job opportunities will I get after completing my French course?",
            "answer": "Upon completing your French course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-07T12:26:26.001Z",
            "updatedAt": "2024-06-07T12:26:26.001Z",
            "__v": 0
        },
        {
            "_id": "666fe375a098ef75f6a4021c",
            "question": "Is French an easy language to learn?",
            "answer": "According to the Foreign Service Institute, French is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:19:17.418Z",
            "updatedAt": "2024-06-17T07:19:17.418Z",
            "__v": 0
        },
        {
            "_id": "666fe41aa098ef75f6a40222",
            "question": "Is French useful in India?",
            "answer": "Learning French opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. French is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:22:02.699Z",
            "updatedAt": "2024-06-17T07:22:02.699Z",
            "__v": 0
        },
        {
            "_id": "666fe500a098ef75f6a40227",
            "question": "How much time will it take to learn French?",
            "answer": "The time it takes to learn French depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 8 months to complete B1-B2 level and approximately 11 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months. \n",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:25:52.018Z",
            "updatedAt": "2024-06-17T07:25:52.018Z",
            "__v": 0
        },
        {
            "_id": "666fe582a098ef75f6a4022b",
            "question": "What if I miss a class?",
            "answer": "Missing a class should not be a worry as you will have lifetime access to the recorded classes and can refer to them at your convenience.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:28:02.899Z",
            "updatedAt": "2024-06-17T07:28:02.899Z",
            "__v": 0
        },
        {
            "_id": "666fe6cca098ef75f6a4022e",
            "question": "Will I be provided with study material?",
            "answer": "Yes, you'll be provided with comprehensive study material worth ₹10,000 + free of cost to supplement your learning and reinforce key concepts.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:33:32.423Z",
            "updatedAt": "2024-06-17T07:33:32.423Z",
            "__v": 0
        },
        {
            "_id": "6690ab29e7d5ba1d26ea6ce3",
            "question": "Who will be teaching me?",
            "answer": "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both French language and teaching methodologies.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:33:32.423Z",
            "updatedAt": "2024-06-17T07:33:32.423Z",
            "__v": 0
        },
        {
            "_id": "6690ab54e7d5ba1d26ea6ce4",
            "question": "How many students are accommodated in one batch?",
            "answer": "Our batches are usually small in size, typically accommodating 5 students to ensure personalised attention.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:33:32.423Z",
            "updatedAt": "2024-06-17T07:33:32.423Z",
            "__v": 0
        },
        {
            "_id": "6690ab86e7d5ba1d26ea6ce5",
            "question": "What is included in the curriculum?",
            "answer": "The curriculum includes grammar, vocabulary, listening, speaking, reading, and writing exercises tailored to each proficiency level, along with cultural insights and practical applications.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:33:32.423Z",
            "updatedAt": "2024-06-17T07:33:32.423Z",
            "__v": 0
        }
    ]
    const slidesData = [
        {
            imgSrc: "https://placehold.co/200x300",
            altText: "Person smiling in a room with bookshelves"
        },
        {
            imgSrc: "https://placehold.co/200x300",
            altText: "Person holding a sign that says 'Enhance your CV with The Language Network'"
        },
        {
            imgSrc: "https://placehold.co/200x300",
            altText: "Person smiling in a room with bookshelves"
        },
        {
            imgSrc: "https://placehold.co/200x300",
            altText: "Person with text overlay 'Here's why you should learn the local language whenever you're visiting a new country'"
        }
    ];
    const inputFields = [
        { id: 1, type: 'text', placeholder: 'Your Full Name' },
        { id: 2, type: 'text', placeholder: 'Contact No.' },
        { id: 3, type: 'email', placeholder: 'Email Address' },
        { id: 4, type: 'text', placeholder: 'Instagram Username' },
      ];
    

    return (
        <div>
            {/* hero section */}
            {
               data && data.length > 0 &&    <Banner title={data[0]?.bannerTitle|| "title"} 
               description={data[0]?.bannerDescription}   buttonText={data[0]?.buttonText} imageSrc={data[0]?.bannerImage}/>
            }
         
            {/* community section */}
            <div className='mb-[112px]'>
                <Heading title={"Our community"}/>
                <StyledSlider slidesData={communityData}>
                    <SlideComponent/>
                </StyledSlider>
            </div>
            {/* how it works section */}
            <SliderComp data={howItWorksData}/>
            {/* faq section */}
            <FaqComp FaqsData={faqData}/>
            {/* start your journey form */}
            <div>
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
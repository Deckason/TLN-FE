'use client'
import BelowBanner from '../../../Components/Common/BelowBanner';
import Heading from '../../../Components/Common/Heading';
import SliderComp from '../../../Components/Common/SliderComp';
import PaymentBar from '../../../Components/HomeComp/PaymentBar';
import Banner from '../../../Shared/Banner'
import FaqComp from '../../../Shared/FaqComp';
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import DynamicForm from '../../../Components/Common/DynamicForm';

const ContentCreatorPage = ()=>{
    const [currentPage, setCurrentPage] = useState(0);
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
            <Banner title={"Create With Us"} description={"Calling all content creators, thought leaders, and influencers! Join forces with The Language Network to spread the joy of language learning far and wide. Together, let's create captivating content across YouTube, Instagram, LinkedIn, podcasts, blogs, and beyond. Join our vibrant community and ignite a passion for languages worldwide!"} buttonText='Get in touch'/>
            {/* community section */}
            <div>
                <Heading title={"Our community"}/>
                <div className="flex flex-col items-center relative">
                    <Swiper
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        onSlideChange={(swiper) => {
                            setCurrentPage(swiper.activeIndex);
                        }}
                        // slidesPerView={4}
                        breakpoints={{
                            1680: {
                                slidesPerView: 4,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            368: {
                                slidesPerView: 1,
                            },
                        }}
                        className="mySwiper mx-auto flex justify-center  items-center max-w-[326px] md:max-w-[700px]  lg:max-w-[850px] md:hidden xl:max-w-[1150px] w-full max-sm:max-h-full   2xl:w-full 3xl:max-w-[1440px]"
                    >
                        {slidesData.map((slide, index) => (
                            <SwiperSlide key={index} className="relative">
                                <img src={slide.imgSrc} alt={slide.altText} className="w-full h-92 object-cover relative z-0" />
                                <div className="absolute inset-0 bg-[#00000033] z-10"></div>
                                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center z-20">
                                    <button className="bg-white rounded-full p-2">
                                        <FaPlay className=" text-black"></FaPlay>
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p className='hidden md:block absolute left-0 text-2xl top-[50%] rounded-full p-2 border-[2px] text-gray-400 border-gray-400 cursor-pointer' ref={navigationPrevRef}><IoIosArrowBack/></p>
                    <p className='hidden md:block absolute right-0 text-2xl top-[50%] rounded-full p-2 border-[2px] text-gray-400 border-gray-400 cursor-pointer' ref={navigationNextRef}><IoIosArrowForward/></p>
                </div>
            </div>
            {/* how it works section */}
            <SliderComp data={howItWorksData}/>
            {/* faq section */}
            <FaqComp FaqsData={faqData}/>
            {/* start your journey form */}
            <div>
                <Heading title={"Start Your Journey "}/>
                <DynamicForm showAttachCV={false} showTextarea={false} inputFields={inputFields}/>
            </div>
            {/* below banner */}
            <BelowBanner title={"Spread the joy of learning with us!"}/>
            {/* payment bar */}
            <PaymentBar/>
        </div>
    )
}

export default ContentCreatorPage;
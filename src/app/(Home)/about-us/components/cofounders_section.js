"use client"
import Image from "next/image";
import Pinnaccf from '../../../../Assets/about-us/cf_pinnac.svg';
import Siddhicf from '../../../../Assets/about-us/cf_siddhi.svg';
import Shubhamcf from '../../../../Assets/about-us/cf_shubham.svg';
import { useState } from "react";

const Cofounders = () => {
    const [showMore, setShowMore] = useState({
        pinnac: false,
        siddhi: false,
        shubham: false,
    });

    const handleToggle = (cofounder) => {
        setShowMore((prev) => ({ ...prev, [cofounder]: !prev[cofounder] }));
    };

    return (
        <div className="flex flex-col justify-center items-center p-8 gap-y-10" 
            style={{
                background: "linear-gradient(to bottom, rgba(117, 117, 117, 0.5), #F6F3F3)"
            }}
        >
            <p className="text-2xl md:text-4xl font-bold mb-7">Meet our Co-Founders:</p>
            <div className="flex flex-col gap-y-10">
                
                <div className="flex flex-col md:flex-row gap-9 justify-center items-center">
                    <Image src={Pinnaccf} alt='Pinnac Yeddy' className="w-100 h-100 md:w-auto md:h-auto"/>
                    <div className="flex flex-col gap-y-4 md:gap-y-7 max-w-lg">
                        <p className="text-2xl md:text-4xl font-bold">Pinnac Yeddy</p>
                        {/* <p className="text-sm md:text-base leading-relaxed">
                            Pinnac Yeddy, the CEO and Marketing Head of The Language Network, brings extensive marketing experience and passion to our team. He leads product development, branding, marketing, and business strategy, driving our vision for growth. Under his leadership, the company has seen consistent innovation and expansion. Pinnac is committed to making language learning accessible and enjoyable for all. With a clear focus on achieving the company's long-term goals, he believes in empowering the team, promoting a collaborative work environment, and fostering creativity. His leadership style emphasizes transparency, efficiency, and teamwork.
                        </p> */}

                        <div className="block md:hidden">
                            <p className="text-xl font-medium">CEO and Marketing Head</p>
                            <button
                                onClick={() => handleToggle("pinnac")}
                                className="h-[48px] sm:h-[58px] px-4 sm:px-8 py-2 sm:py-3.5 rounded-lg border border-teal-600 justify-center items-start gap-2.5 inline-flex mt-2"
                            >
                                <div className="text-center text-teal-600 text-lg sm:text-2xl font-medium">
                                {showMore.pinnac ? "Read Less" : "Read More"}
                                </div>
                            </button>
                        </div>

                        <p className={`text-sm md:text-base leading-relaxed mt-4 ${showMore.pinnac ? 'block' : 'hidden'} md:block`}>
                            Pinnac Yeddy, the CEO and Marketing Head of The Language Network, brings extensive marketing experience and passion to our team. He leads product development, branding, marketing, and business strategy, driving our vision for growth. Under his leadership, the company has seen consistent innovation and expansion. Pinnac is committed to making language learning accessible and enjoyable for all. With a clear focus on achieving the company&apos;s long-term goals, he believes in empowering the team, promoting a collaborative work environment, and fostering creativity. His leadership style emphasizes transparency, efficiency, and teamwork.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-9 justify-center items-center">
                    <Image src={Siddhicf} alt='Siddhi Chokani' className="w-100 h-100 md:w-auto md:h-auto"/>
                    <div className="flex flex-col gap-y-4 md:gap-y-7 max-w-lg">
                        <p className="text-2xl md:text-4xl font-bold">Siddhi Chokani</p>
                        {/* <p className="text-sm md:text-base leading-relaxed">
                            Siddhi Chokhani, the dynamic Chief of Staff at The Language Network. It was Siddhi's profound expertise in French that served as the catalyst for The Language Network's inception. Her background in language and education brings immense value to the team. She is passionate about fostering a love for languages among students and creating a structured, effective curriculum. Siddhi is dedicated to providing an enriching learning experience for all students, focusing on individual growth and progress. Her leadership extends beyond administration; she’s also an inspiration to her team, always encouraging innovative thinking and continuous improvement.
                        </p> */}

                        <div className="block md:hidden">
                            <p className="text-xl font-medium">Chief of Staff</p>
                            <button
                                onClick={() => handleToggle("siddhi")}
                                className="h-[48px] sm:h-[58px] px-4 sm:px-8 py-2 sm:py-3.5 rounded-lg border border-teal-600 justify-center items-start gap-2.5 inline-flex mt-2"
                            >
                                <div className="text-center text-teal-600 text-lg sm:text-2xl font-medium">
                                {showMore.siddhi ? "Read Less" : "Read More"}
                                </div>
                            </button>
                        </div>

                        <p className={`text-sm md:text-base leading-relaxed mt-4 ${showMore.siddhi ? 'block' : 'hidden'} md:block`}>
                            Siddhi Chokani, the dynamic Chief of Staff at The Language Network. It was Siddhi&apos;s profound expertise in French that served as the catalyst for The Language Network&apos;s inception. Her background in language and education brings immense value to the team. She is passionate about fostering a love for languages among students and creating a structured, effective curriculum. Siddhi is dedicated to providing an enriching learning experience for all students, focusing on individual growth and progress. Her leadership extends beyond administration; she’s also an inspiration to her team, always encouraging innovative thinking and continuous improvement.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-9 justify-center items-center">
                    <Image src={Shubhamcf} alt='Shubham Pille' className="w-100 h-100 md:w-auto md:h-auto"/>
                    <div className="flex flex-col gap-y-4 md:gap-y-7 max-w-lg">
                        <p className="text-2xl md:text-4xl font-bold">Shubham Pille</p>
                        {/* <p className="text-sm md:text-base leading-relaxed">
                            Meet our co-founder, Shubham Pille, the dedicated Chief Operating Officer at The Language Network. With a keen eye for detail and a knack for multitasking, Shubham oversees various critical aspects of our organization, ensuring smooth daily operations. His focus on operational efficiency and resource management is integral to our success. Shubham is passionate about the intersection of technology and education, striving to enhance the accessibility and effectiveness of our language learning platforms. He believes in creating an environment where both students and team members can thrive, fostering growth through technology-driven solutions.
                        </p> */}

                        <div className="block md:hidden">
                            <p className="text-xl font-medium">Chief of Staff</p>
                            <button
                                onClick={() => handleToggle("shubham")}
                                className="h-[48px] sm:h-[58px] px-4 sm:px-8 py-2 sm:py-3.5 rounded-lg border border-teal-600 justify-center items-start gap-2.5 inline-flex mt-2"
                            >
                                <div className="text-center text-teal-600 text-lg sm:text-2xl font-medium">
                                {showMore.shubham ? "Read Less" : "Read More"}
                                </div>
                            </button>
                        </div>

                        <p className={`text-sm md:text-base leading-relaxed mt-4 ${showMore.shubham ? 'block' : 'hidden'} md:block`}>
                            Meet our co-founder, Shubham Pille, the dedicated Chief Operating Officer at The Language Network. With a keen eye for detail and a knack for multitasking, Shubham oversees various critical aspects of our organization, ensuring smooth daily operations. His focus on operational efficiency and resource management is integral to our success. Shubham is passionate about the intersection of technology and education, striving to enhance the accessibility and effectiveness of our language learning platforms. He believes in creating an environment where both students and team members can thrive, fostering growth through technology-driven solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cofounders;

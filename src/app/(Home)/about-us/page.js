"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import MissionV from "./components/MissionVision";
import BelowBanner from "../../../Components/Common/BelowBanner";
import PaymentBar from "../../../Components/HomeComp/PaymentBar";
import Faqs from "./components/aboutus_faqs";
import Divyaimg from "../../../Assets/about-us/team_divya.svg";
import Mayaimg from "../../../Assets/about-us/team_maya.svg";
import Peterimg from "../../../Assets/about-us/team_peter.svg";
import Premimg from "../../../Assets/about-us/team_prem.svg";
import Priyaimg from "../../../Assets/about-us/team_priya.svg";
import Cofounderssection from './components/cofounders_section';
import WhyShould from "./components/Whyshould";
import Banner from "./components/Aboutus_banner";
import Groupedbanner from "../../../Assets/about-us/grouped_banner.svg"
import Principlescomp from "./components/Principles";

const Aboutus = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Ensure window is only accessed on the client side
        if (typeof window !== 'undefined') {
            const handleResize = () => setIsMobile(window.innerWidth <= 768);
            handleResize(); // Initial check

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMoreToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <Banner />
            <div className="p-8 flex flex-col gap-y-8 m-8">
                <p className="text-2xl md:text-5xl font-bold block md:hidden">Our Journey</p>
                <div className="md:flex gap-x-10 items-center justify-between">
                    <Image src={Groupedbanner} alt="new banner" />
                    <div>
                        <p className="text-2xl md:text-5xl font-bold hidden md:block">Our Journey</p>
                    </div>
                </div>
                <p className="text-justify">
                    {isExpanded || (typeof window !== 'undefined' && window.innerWidth >= 768) ? (
                        <>
                            Our story originates from Siddhi&apos;s profound realization while feeling undervalued and underpaid at her job...
                        </>
                    ) : (
                        <>
                            Our story originates from Siddhi&apos;s profound realization while feeling undervalued and underpaid at her job...
                            <span onClick={handleReadMoreToggle} className="text-blue-500 cursor-pointer ml-1 md:hidden">
                                Read More
                            </span>
                        </>
                    )}
                </p>
                {isExpanded && (
                    <span onClick={handleReadMoreToggle} className="text-blue-500 cursor-pointer mt-2 md:hidden">
                        Read Less
                    </span>
                )}
            </div>
            <Principlescomp />
            <MissionV />
            <Cofounderssection />
            <div className="flex flex-col m-8 justify-center items-center gap-y-10">
                <p className="text-2xl md:text-4xl font-bold">Our Team</p>
                <div className="relative w-full overflow-hidden">
                    <div className={`flex gap-4 justify-center items-center p-8 mb-8 ${isMobile ? "slide-track" : ""}`}>
                        <Image src={Divyaimg} alt="no candidate image" />
                        <Image src={Mayaimg} alt="no candidate image" />
                        <Image src={Premimg} alt="no candidate image" />
                        <Image src={Peterimg} alt="no candidate image" />
                        <Image src={Priyaimg} alt="no candidate image" />
                        {isMobile && (
                            <>
                                <Image src={Divyaimg} alt="no candidate image" />
                                <Image src={Mayaimg} alt="no candidate image" />
                                <Image src={Premimg} alt="no candidate image" />
                                <Image src={Peterimg} alt="no candidate image" />
                                <Image src={Priyaimg} alt="no candidate image" />
                            </>
                        )}
                    </div>
                </div>
            </div>
            <WhyShould />
            <Faqs />
            <div className="flex flex-col items-center bg-[#FAFAFA] py-8 px-4 mb-10 text-center space-y-2 mt-5">
                <p className="font-bold text-2xl sm:text-3xl md:text-4xl">We&apos;re here to help</p>
                <p className="font-medium text-sm sm:text-base md:text-lg">Get in touch for any queries or specific needs</p>
                <button className="py-2 px-6 bg-primary-color text-white rounded-md text-sm sm:text-base">Contact Us</button>
            </div>
            <BelowBanner title={"Learning. Simplified."} />
            <PaymentBar />
            <style jsx>{`
                .slide-track {
                    display: flex;
                    animation: scroll 20s linear infinite;
                    width: max-content;
                }
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
};

export default Aboutus;

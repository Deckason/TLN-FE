import React from 'react';
import ClockImg from '../../Assets/Blogs/clock.png';
import Image from 'next/image';

const BannerAd = () => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-[#EBF7F6] p-6 md:p-8 rounded-lg justify-center max-w-4xl mx-auto">
            {/* Image Section */}
            <div className="relative w-full h-full md:w-24 md:h-24 flex-shrink-0 mb-4 md:mb-0">
                {/* Outer Circle */}
                <div className="absolute top-1 left-1 w-full h-full border-[4px] md:border-[6px] border-primary-color rounded-full"></div>
                {/* Image */}
                <Image
                    src={ClockImg} 
                    alt="Clock"
                    className="rounded-full w-full h-full object-cover relative z-10"
                />
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left md:ml-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    How long does it take to learn a language?
                </h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur. Leo interdum sagittis vel nunc. miquet tristique.
                </p>
                <button className="mt-4 bg-primary-color text-white py-2 px-4 md:py-[14px] md:px-[32px] rounded-md font-semibold">
                    CTA
                </button>
            </div>
        </div>
    );
};

export default BannerAd;

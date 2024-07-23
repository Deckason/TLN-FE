import Link from "next/link";

const BannerDemoButton = () => {
  return (
    <Link
      href={"https://tallysolutions.com/"}
      className="mt-[24px] mx-[16px] w-[328px] h-[43px] sm:h-[58px] py-[12px] px-[32px] text-[16px]/[19.26px] sm:text-2xl font-medium shadow-md hover:shadow-xl transition focus:bg-white 
      cursor-pointer duration-300  hover:bg-white text-white focus:text-teal-600
       focus:border-teal-600 border  hover:text-teal-600 hover:border-teal-600
        bg-teal-600 rounded-lg z-30 text-center"
    >
      Book a free demo
    </Link>
  );
};

export default BannerDemoButton;

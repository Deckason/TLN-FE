"use client";
import Image from "next/image";
import React, { useState } from "react";
import Phone from "../Assets/Phone.png";

const Contact = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleCopyPhoneNumber = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  };

  return (
    <>
      <div className="fixed flex z-50 gap-y-1.5 flex-col lg:gap-5 top-[50%] right-0 bg-transparent ">
        <a
          className="flex hover:scale-110 transform duration-300 focus:scale-110 items-center cursor-pointer"
          href="https://api.whatsapp.com/send?phone=9137239887"
        >
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:h-[60px] lg:w-[60px] md:h-[40px] w-[40px] "
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H80V80H8C3.58172 80 0 76.4183 0 72V8Z"
              fill="#29A71A"
            />
            <path
              d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
              fill="#29A71A"
            />
            <path
              d="M57.7801 22.3542C53.5842 18.15 48.012 15.5717 42.0687 15.0843C36.1253 14.597 30.2021 16.2327 25.3674 19.6965C20.5326 23.1602 17.1047 28.2239 15.7018 33.9742C14.299 39.7245 15.0136 45.7829 17.7167 51.0566L15.0632 63.8369C15.0357 63.9641 15.0349 64.0956 15.0609 64.2231C15.087 64.3506 15.1392 64.4714 15.2145 64.578C15.3247 64.7397 15.482 64.8642 15.6654 64.9349C15.8489 65.0056 16.0497 65.0191 16.241 64.9736L28.8668 62.0047C34.1676 64.6185 40.2313 65.2818 45.9788 63.8767C51.7264 62.4715 56.785 59.0889 60.2546 54.3308C63.7242 49.5728 65.3797 43.7478 64.9266 37.8924C64.4735 32.0371 61.9411 26.5311 57.7801 22.3542ZM53.8434 53.5253C50.9402 56.3974 47.2019 58.2933 43.1551 58.9458C39.1083 59.5983 34.9571 58.9746 31.2866 57.1626L29.5267 56.2987L21.7863 58.1174L21.8092 58.0219L23.4132 50.2927L22.5516 48.606C20.6761 44.9518 20.0145 40.8025 20.6616 36.7524C21.3086 32.7023 23.2312 28.9593 26.1538 26.0596C29.826 22.4176 34.806 20.3716 39.9986 20.3716C45.1911 20.3716 50.1711 22.4176 53.8434 26.0596C53.8747 26.0952 53.9083 26.1286 53.9442 26.1596C57.571 29.8111 59.5956 34.7369 59.5767 39.8631C59.5578 44.9893 57.4969 49.9003 53.8434 53.5253Z"
              fill="white"
            />
            <path
              d="M52.544 48.014C51.6031 49.4958 50.1167 51.3094 48.2485 51.7594C44.9758 52.5503 39.9531 51.7867 33.7031 45.9594L33.6258 45.8912C28.1304 40.7958 26.7031 36.5549 27.0485 33.1912C27.2395 31.2821 28.8304 29.5549 30.1713 28.4276C30.3833 28.2467 30.6347 28.1178 30.9053 28.0514C31.176 27.985 31.4585 27.9829 31.7301 28.0452C32.0018 28.1075 32.2551 28.2324 32.4698 28.4101C32.6846 28.5878 32.8547 28.8133 32.9667 29.0685L34.9895 33.614C35.1209 33.9087 35.1696 34.2336 35.1304 34.554C35.0911 34.8743 34.9654 35.1779 34.7667 35.4321L33.744 36.7594C33.5246 37.0335 33.3921 37.3669 33.3638 37.7169C33.3354 38.0668 33.4124 38.4172 33.5849 38.723C34.1576 39.7276 35.5304 41.2049 37.0531 42.5731C38.7622 44.1185 40.6576 45.5321 41.8576 46.014C42.1787 46.1451 42.5318 46.1771 42.8712 46.1059C43.2107 46.0346 43.521 45.8632 43.7622 45.614L44.9485 44.4185C45.1775 44.1928 45.4621 44.0318 45.7736 43.9519C46.085 43.8721 46.412 43.8762 46.7213 43.964L51.5258 45.3276C51.7908 45.4089 52.0338 45.5497 52.236 45.7393C52.4383 45.9289 52.5945 46.1622 52.6928 46.4214C52.791 46.6807 52.8287 46.9589 52.8029 47.2349C52.7771 47.511 52.6886 47.7774 52.544 48.014Z"
              fill="white"
            />
          </svg>
        </a>
        <a
          className="flex hover:scale-110 transform duration-300 items-center focus:scale-110 bg-white cursor-pointer"
          href="tel:8879328962"
        >
          <Image
            className="lg:h-[60px] lg:w-[60px] md:h-[40px] w-[40px]"
            src={Phone}
            alt="phone"
          />
        </a>
      </div>
      {alertVisible && (
        <div className="absolute bottom-5 right-5 bg-white border border-gray-300 rounded-lg p-2">
          Phone number copied to clipboard!
        </div>
      )}
    </>
  );
};

export default Contact;
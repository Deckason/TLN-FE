import React from "react";
import amazon from "../../../../Assets/Homepage/PaymentBar/amazon.png";
import bhim from "../../../../Assets/Homepage/PaymentBar/bhim-upi-100.png";
import bajaj from "../../../../Assets/Homepage/PaymentBar/bajaj-finserv.png";
import Paytm from "../../../../Assets/Homepage/PaymentBar/Paytm.png";
import Gpay from "../../../../Assets/Homepage/PaymentBar/Gpay.png";
import Razor from "../../../../Assets/Homepage/PaymentBar/razorpay 1.png";
import upi from "../../../../Assets/Homepage/PaymentBar/upi-ar21 1.png";
import rupay from "../../../../Assets/Homepage/PaymentBar/rupay.png";

import Image from "next/image";

const PaymentBar = () => {
  return (
    <div className="flex-wrap bg-[#000000] gap-10 min-h-[86px]  flex items-center px-3 justify-around">
      <div className="slider">
        <div className="slide-track">
          <div className="slide w-[160px]">
            <Image src={amazon} alt="amazon" />
          </div>
          <div className="slide w-[160px]">
            <Image className="" alt="logo" src={bhim} />
          </div>
          <div className="slide w-[160px] ">
            <Image className="" alt="logo" src={bajaj} />
          </div>
          <div className="slide w-[160px] ">
            <Image className="" alt="logo" src={Paytm} />
          </div>
          <div className="slide w-[160px] ">
            <Image className="" alt="logo" src={Gpay} />
          </div>
          <div className="slide w-[160px] ">
            <Image className="" alt="logo" src={Razor} />
          </div>
          <div className="slide w-[160px]">
            <Image className="" alt="logo" src={upi} />
          </div>
          <div className="slide w-[160px] ">
            <Image className="" alt="logo" src={rupay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBar;

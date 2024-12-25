import React from "react";
import amazon from "../../Assets/Homepage/PaymentBar/amazon.png";
import bhim from "../../Assets/Homepage/PaymentBar/bhim-upi-100.png";
import bajaj from "../../Assets/Homepage/PaymentBar/bajaj-finserv.png";
import Paytm from "../../Assets/Homepage/PaymentBar/Paytm.png";
import Gpay from "../../Assets/Homepage/PaymentBar/Gpay.png";
import Razor from "../../Assets/Homepage/PaymentBar/razorpay 1.png";
import upi from "../../Assets/Homepage/PaymentBar/upi-ar21 1.png";
import rupay from "../../Assets/Homepage/PaymentBar/rupay.png";

import Image from "next/image";

const PaymentBar = () => {
  return (
    <div className="bg-[#000000] h-[86px] justify-center">
      <div className="slider h-[86px]">
        <div className="slide-track flex items-center"> 
          <div className="slide h-[86px] flex items-center">
            <Image className="mr-[-10px] h-[86px] object-contain  " src={amazon} alt="amazon" /> 
          </div>
          <div className="slide h-[86px] flex items-center">
            <Image className="mr-[-10px] h-[86px] object-contain  " alt="logo" src={bhim} />
          </div>
          <div className="slide h-[86px] flex items-center ">
            <Image className="mr-[-10px] h-[86px] object-contain  " alt="logo" src={bajaj} />
          </div>
          <div className="slide h-[86px] flex items-center ">
            <Image className="mr-[-10px] h-[86px] object-contain  " alt="logo" src={Paytm} />
          </div>
          <div className="slide h-[86px] flex items-center ">
            <Image className="mr-[-10px] h-[86px] object-contain  " alt="logo" src={Gpay} />
          </div>
          <div className="slide h-[86px] flex items-center ">
            <Image className="mr-[-10px] h-[86px] object-contain  " alt="logo" src={Razor} />
          </div>
          <div className="slide h-[86px] flex items-center">
            <Image className="mr-[-10px] h-[86px] object-contain  " alt="logo" src={upi} />
          </div>
          <div className="slide h-[86px] flex items-center ">
            <Image className="mr-[-10px] h-[86px] object-contain  " alt="logo" src={rupay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBar;
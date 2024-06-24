import React from "react";
import amazon from "@/Assets/Homepage/PaymentBar/amazon.png";
import bhim from "@/Assets/Homepage/PaymentBar/bhim-upi-100.png";
import bajaj from "@/Assets/Homepage/PaymentBar/bajaj-finserv.png";
import Paytm from "@/Assets/Homepage/PaymentBar/Paytm.png";
import Gpay from "@/Assets/Homepage/PaymentBar/Gpay.png";
import Razor from "@/Assets/Homepage/PaymentBar/razorpay 1.png";
import upi from "@/Assets/Homepage/PaymentBar/upi-ar21 1.png";
import rupay from "@/Assets/Homepage/PaymentBar/rupay.png";

import Image from "next/image";

const PaymentBar = () => {
  return (
    <div className="flex-wrap bg-[#000000] gap-y-10 gap-x-14 py-10 flex items-center lg:px-10 justify-center">
      <Image className="max-sm:scale-75" src={amazon} alt="amazon" />
      <Image className="max-sm:scale-75" src={bhim} alt="Bhim" />
      <Image className="max-sm:scale-75" src={bajaj} alt="Bajaj" />
      <Image className="max-sm:scale-75" src={Paytm} alt="Paytm" />
      <Image className="max-sm:scale-75" src={Gpay} alt="Gpay" />
      <Image className="max-sm:scale-75" src={Razor} alt="Razor" />
      <Image className="max-sm:scale-75" src={upi} alt="Upi" />
      <Image className="max-sm:scale-75" src={rupay} alt="Rupay" />
    </div>
  );
};

export default PaymentBar;

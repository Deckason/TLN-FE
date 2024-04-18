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
    <div className="flex-wrap bg-[#000000] gap-10 py-10 flex items-center justify-around">
      <Image src={amazon} alt="amazon" />
      <Image src={bhim} alt="Bhim" />
      <Image src={bajaj} alt="Bajaj" />
      <Image src={Paytm} alt="Paytm" />
      <Image src={Gpay} alt="Gpay" />
      <Image src={Razor} alt="Razor" />
      <Image src={upi} alt="Upi" />
      <Image src={rupay} alt="Rupay" />
    </div>
  );
};

export default PaymentBar;

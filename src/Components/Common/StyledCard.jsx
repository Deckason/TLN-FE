import Image from "next/image";
import React from "react";

const StyledCard = ({title,description,img}) => {
  return (
    <div className="max-w-sm mx-auto  bg-white shadow-md rounded-lg">
      <div className="flex justify-center mb-4">
        {/* Image section */}
        <Image
          src={img || "https://placeholder.co/300X300"}
          alt="Illustration"
          className="w-16 h-16"
        />
      </div>
      <div className="bg-primary-color text-white text-center py-2 rounded-t-md">
        <h2 className="font-semibold text-lg">{title}</h2>
      </div>
      <div className="p-4 text-gray-700 text-sm">
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StyledCard;

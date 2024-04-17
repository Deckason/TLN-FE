import React, { useState } from "react";
import ReactDOM from "react-dom";

const ReusableModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="absolute z-50 flex items-center justify-center min-w-full min-h-full"
    >
      <div className="shadow-xl bg-white max-w-[630px] p-5 rounded-[16px]">
        {children}
      </div>
    </div>
  );
};

export default ReusableModal;

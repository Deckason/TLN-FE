import React, { useEffect } from "react";

const ReusableLoginModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleScroll = () => {
      onClose();
    };

    if (isOpen && typeof window !== "undefined") {
      window?.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined")
        window?.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" flex items-center justify-center  p-5 rounded-[16px]"
      >
        {children}
      </div>
    </div>
  );
};

export default ReusableLoginModal;
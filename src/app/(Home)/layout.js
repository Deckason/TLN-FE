"use client";
import HomeFooter from "@/Components/HomeComp/HomeFooter";
import Nav from "@/Utilities/Nav";
import { createContext, useEffect, useState } from "react";
export const LanguageOptionContext = createContext("");
const Homelayout = ({ children }) => {
  const [Language, setLanguage] = useState("English");
  const data = {
    Language,
    setLanguage,
  };
  useEffect(() => {
    setLanguage(localStorage.getItem("Language") || "English");
  }, []);
  return (
    <LanguageOptionContext.Provider value={data} className="">
      <Nav />
      {children}

      <HomeFooter />
    </LanguageOptionContext.Provider>
  );
};

export default Homelayout;

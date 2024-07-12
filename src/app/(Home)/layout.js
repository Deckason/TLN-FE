"use client";
import HomeFooter from "../../Components/HomeComp/HomeFooter";
import Nav from "../../Utilities/Nav";
import "../../css/Custom.css";
import { api } from "../../store/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
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
      <ApiProvider api={api}>
        <Nav />
        {children}
        <HomeFooter />
      </ApiProvider>
    </LanguageOptionContext.Provider>
  );
};

export default Homelayout;

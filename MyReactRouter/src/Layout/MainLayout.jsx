import { ThemeContextApi } from "../Api/ThemeContextApi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
const MainLayout = ({children}) => {
   const[data,setData]=useState("Mydata")

  return (
    <ThemeContextApi.Provider value={{data,setData}}>
      <Navbar />
      {children}
      <Footer />
    </ThemeContextApi.Provider>
  );
};

export default MainLayout;

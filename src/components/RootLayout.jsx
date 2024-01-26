import { Outlet } from "react-router-dom";
import BodyMainContent from "./bodyMainContent";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function RootLayout(){
  return (
    <>
      <Header />
      <BodyMainContent/>
      <Outlet/> 
      <Footer/>
    </>
  )
}
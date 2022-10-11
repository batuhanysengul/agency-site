import Navbar from "../../components/Navbar";
import Mobile from "../../components/Mobile";
import React, {useState} from "react";
import Hero from "../../components/Hero";
import About from "../../components/About"; 
import {AboutObj1, AboutObj2} from '../About/Data'
import Marquee from "../../components/Customers";
import Footer from "../Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Mobile isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About {...AboutObj1} />
      <About {...AboutObj2} />
      <Marquee />
      <Footer />
    </>
  );
};

export default Home;

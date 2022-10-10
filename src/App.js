import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Mobile from "./components/Mobile";
import React, {useState} from "react";
import Hero from "./components/Hero";
import About from "./components/About"; 
import {AboutObj1, AboutObj2} from '../src/components/About/Data'
import Marquee from "./components/Customers";

function App() {
  
  //Mobile hamburger menu state
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <BrowserRouter>
      <Mobile isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero />
      <About {...AboutObj1} />
      <About {...AboutObj2} />
      <Marquee />
    </BrowserRouter>
  );
}

export default App;

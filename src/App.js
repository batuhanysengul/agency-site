import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Mobile from "./components/Mobile";
import React, {useState} from "react";
import Hero from "./components/Hero";

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
    </BrowserRouter>
  );
}

export default App;

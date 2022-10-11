import "./App.css";
import Home from "./components/Pages/Home";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/contact' element={<Contact/>} exact />
      </Routes>
    </Router>
  );
}

export default App;

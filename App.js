import { Routes, Route } from "react-router-dom";
import "./App.css";
import "mdb-ui-kit"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <>
   
   
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        
      </Routes>
      
    </>
  );
}

export default App;

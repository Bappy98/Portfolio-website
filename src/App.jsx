import React from "react";
import Navbar from "./component/top-bar/Navbar";
import Home from "./component/Home/home";
import About from "./component/about/About";
import Education from "./component/education/Education";
import Contact from "./component/contact/Contact";

function App() {
  return <div className="bg-slate-800">
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
   <Contact/>
  </div>;
}

export default App;

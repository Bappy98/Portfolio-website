import React from "react";
import Navbar from "./component/top-bar/Navbar";
import About from "./component/about/About";
import Education from "./component/education/Education";
import Contact from "./component/contact/Contact";
import Home from "./component/Home/Home";

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

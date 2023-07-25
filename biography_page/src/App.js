import React from "react"
import SectionOne from  "./Sections/SectionOne/SectionOne"
import './App.css';
import SectionTwo from "./Sections/SectionTwo/SectionTwo"
import SectionThree from "./Sections/SectionThree/SectionThree"
import SectionFour from "./Sections/SectionFour/SectionFour"


function App() {
  return (
    <div className="App">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour/>
      
    </div>
  );
}

export default App;

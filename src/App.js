import "./App.css";
// import FAQs from "./components/FAQs";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, {useState} from "react";

function App() {
  const[mode, setMode] = useState("light");
  
  const toggleBtn = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#021837";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <div>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleBtn={toggleBtn}/>
      <div className="container my-5">
        <TextArea heading="Enter Your Text" mode={mode}/>
      </div>
      {/* <div className="container">
        <FAQs/>
      </div> */}
    </div>
  );
}

export default App;

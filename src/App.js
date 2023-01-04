import "./App.css";
// import FAQs from "./components/FAQs";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, {useState} from "react";
import Alert from "./components/Alert";

function App() {
  const[mode, setMode] = useState("light");
  const[alert, setAlert] = useState(null);

  const showAlert = (alertMsg, type)=>{
    setAlert({
      alertMsg: alertMsg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleBtn = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#021837";
      showAlert("Dark Mode is Enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  }

  return (
    <div>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleBtn={toggleBtn}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <TextArea heading="Enter Your Text" mode={mode} showAlert={showAlert}/>
      </div>
      {/* <div className="container">
        <FAQs/>
      </div> */}
    </div>
  );
}

export default App;

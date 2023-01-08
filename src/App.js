import "./App.css";
import FAQs from "./components/FAQs";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (alertMsg, type) => {
    setAlert({
      alertMsg: alertMsg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleBtn = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#021837";
      showAlert("Dark Mode is Enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleBtn={toggleBtn} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<div className="my-5"><TextArea heading="Enter Your Text" mode={mode} showAlert={showAlert} /></div>}></Route>
        <Route path="/about" element={<About mode={mode}/>}/>
        <Route path="/faqs" element={<FAQs mode={mode}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

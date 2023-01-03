import "./App.css";
import FAQs from "./components/FAQs";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-5">
        <TextArea heading="Enter Your Text"/>
      </div>
      <div className="container">
        <FAQs/>
      </div>
    </div>
  );
}

export default App;

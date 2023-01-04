import React, {useState} from "react";

export default function TextArea(props) {
    const handleOnChange = (event) =>{
        newText(event.target.value)
    }
    const handleUpperCase = () =>{
        let temp = text.toUpperCase();
        newText(temp);
    }
    const handleLowerCase = () =>{
        let temp = text.toLowerCase();
        newText(temp);
    }
    let style = {
        backgroundColor: props.mode === "light"?"white":"#00141e",
        color: props.mode === "light"?"black":"white"
    };
    const[text, newText] = useState("Type your Paragraph");
    return (
        <>
        <div className="container">
            <h2 style={{color: props.mode === "dark"?"white":"black"}}>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={style} onChange={handleOnChange} id="onlyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCase}>Convert UpperCase</button> 
            <button className="btn btn-success mx-3" onClick={handleLowerCase}>Convert LowerCase</button> 
        </div>
        <div className="container my-3">
            <h2 style={{color: props.mode === "dark"?"white":"black"}}>Text Summary</h2><hr></hr>
            <p style={{color: props.mode === "dark"?"white":"black"}}>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    );
}

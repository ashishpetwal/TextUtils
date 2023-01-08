import React, { useState } from "react";

export default function TextArea(props) {
    const handleOnChange = (event) => {
        newText(event.target.value)
    }
    const handleUpperCase = () => {
        let temp = text.toUpperCase();
        newText(temp);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowerCase = () => {
        let temp = text.toLowerCase();
        newText(temp);
        props.showAlert("Converted to lowercase", "success");

    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");

    }
    let style = {
        backgroundColor: props.mode === "light" ? "white" : "#00141e",
        color: props.mode === "light" ? "black" : "white"
    };
    const [text, newText] = useState("Type your Paragraph");
    return (
        <>
            <div className="container">
                <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={style} onChange={handleOnChange} id="onlyBox" rows="8"></textarea>
                </div>
                <button disabled = {text.length ===0} className="btn btn-primary mx-3 my-3" onClick={handleUpperCase}>Convert UpperCase</button>
                <button disabled = {text.length ===0} className="btn btn-success mx-3 my-3" onClick={handleLowerCase}>Convert LowerCase</button>
                <button disabled = {text.length ===0} className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>Text Summary</h2><hr></hr>
                <p style={{ color: props.mode === "dark" ? "white" : "black" }}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
            </div>
        </>
    );
}

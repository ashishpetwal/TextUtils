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
    const[text, newText] = useState("Type your Paragraph");
    return (
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="onlyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCase}>Convert UpperCase</button> 
            <button className="btn btn-success mx-3" onClick={handleLowerCase}>Convert LowerCase</button> 
        </div>
        <div className="container my-3">
            <h2>Text Summary</h2><hr></hr>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    );
}

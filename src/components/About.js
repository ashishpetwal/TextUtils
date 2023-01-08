import React from 'react'

function About(props) {
    let myStyle = {
        backgroundColor: props.mode === "dark" ? "#021837" : "white",
        color: props.mode === "dark" ? "white" : "black",
        margin: "20px 0px 0px 0px"
    }
    return (
        <div className='mx-5' style={myStyle}>
            <p>TextUtils is an online text formatter app. It helps you to in different ways :-<br /><br />
                1. Convert All Characters to <strong>UpperCase</strong>.<br /><br />
                2. Convert All Characters to <strong>LowerCase</strong>.<br /><br />
                3. <strong>Copy</strong> All the Text Inputted.<br /><br />
                4. Count Number of <strong>Words</strong> and <strong>Characters</strong><br />
                and many more...
            </p>
        </div>
    )
}

export default About
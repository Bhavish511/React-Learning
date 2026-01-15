import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("upper btn clicked");
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log("Handle on change clicked");
    }
    const [text, setText] = useState('Enter the text here');
    // text = "New text"; // Wrong way to change the state variable
    // setText("New text"); // Correct way to change the state variable

  return (
    <div>
        <h1>{props.heading}</h1>    
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}

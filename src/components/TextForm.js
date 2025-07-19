import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    //console.log("Uppercase was clicked" + text);
  }

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  } 
  
  const [text, setText] = useState("Enter your text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control " id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>

        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to UPPER CASE</button>
      </div>
    </div>
  )
}


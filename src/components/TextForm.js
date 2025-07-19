import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    //console.log("Uppercase was clicked" + text);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    //console.log("Lowercase was clicked" + text);
  }

  const handleclearClick = () => {
    let newText = "";
    setText(newText);
  }



  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  } 
  
  const [text, setText] = useState("");
  return (
    <>
    <div className='container'> 
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control " id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>

        <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to UPPER CASE</button>

        <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Lower Case</button>

        <button className="btn btn-primary mx-3 my-3" onClick={handleclearClick}>Clear Text</button>

      </div>
    </div>

    <div className="container my-4">
      <h1>Text Summary:</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>


      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
    </div>
    </>
  )
}


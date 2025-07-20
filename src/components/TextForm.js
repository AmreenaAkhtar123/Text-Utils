import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = () => {
    setHistory([...history, text]);
    setRedoStack([]);
    let newText = text.toUpperCase();
    setText(newText);
  }


  const handleLoClick = () => {
    setHistory([...history, text]);
    setRedoStack([]);
    let newText = text.toLowerCase();
    setText(newText);
  }


  const handleclearClick = () => {
    setHistory([...history, text]);
    setRedoStack([]);
    setText("");
  }


  const handleUndo = () => {
    if (history.length === 0) 
      return;
    const lastText = history[history.length - 1];
    setRedoStack([text, ...redoStack]); // push current text into redo
    setText(lastText);
    setHistory(history.slice(0, history.length - 1));
  };

  const handleRedo = () => {
    if (redoStack.length === 0) 
      return;
    const nextText = redoStack[0];
    setHistory([...history, text]); // push current text into history
    setText(nextText);
    setRedoStack(redoStack.slice(1));
  };



  const handleOnChange = (event) => {
    setHistory([...history, text]);         // Save current state before updating
    setRedoStack([]);                       // Clear redo stack on new input
    setText(event.target.value);
  }

  const handleTitleCase = () => {
    setHistory([...history, text]);
    setRedoStack([]);
    let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
  }
    const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  const removeSpace = () => {
    const newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    
  };

  const [text, setText] = useState("");
  const [history, setHistory] = useState([]); // for undo
  const [redoStack, setRedoStack] = useState([]); // for redo
  return (
    <>
    <div className={`container ${props.darkMode ? 'dark-mode' : ''}`}>
  <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea
      className={`form-control ${props.darkMode ? 'dark-textarea' : ''}`}
      id="myBox"
      value={text}
      rows="8"
      onChange={handleOnChange}
      style={{
        backgroundColor: props.darkMode ? '#2c2c2c' : '#ffffff',
        color: props.darkMode ? '#ffffff' : '#000000',
        borderColor: props.darkMode ? '#555' : '#B6B09F'
      }}
    ></textarea>


    {/* Group all buttons in a div */}
    <div className="textform-buttons d-flex flex-wrap mt-3">
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>UPPER CASE</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>lower case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleTitleCase}>Title Case</button>
      <button className="btn btn-secondary mx-2 my-2" onClick={handleclearClick}>Clear</button>
      <button className="btn btn-warning mx-2 my-2" onClick={handleUndo}>Undo</button>
      <button className="btn btn-success mx-2 my-2" onClick={handleRedo}>Redo</button>
      <button className="btn btn-warning mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-warning mx-2 my-2" onClick={removeSpace}>Remove Extra Spaces</button>
      
    </div>

  </div>
</div>

<div className="container text-summary">
  <h1>Text Summary:</h1>
  <p>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>
  <p>{(0.008 * text.split(" ").filter(word => word !== "").length).toFixed(2)} Minutes Read</p>



  <h2>Preview</h2>
  <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
</div>


    </>
  )
  
}



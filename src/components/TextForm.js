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

  const [text, setText] = useState("");
  const [history, setHistory] = useState([]); // for undo
  const [redoStack, setRedoStack] = useState([]); // for redo
  return (
    <>
    <div className='container'> 
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control " id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>

        <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to UPPER CASE</button>

        <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Lower Case</button>

        <button className="btn btn-primary mx-3 my-3" onClick={handleTitleCase}>Title Case</button>

        <button className="btn btn-primary mx-3 my-3" onClick={handleclearClick}>Clear Text</button>

        <button className="btn btn-primary mx-3 my-3" onClick={handleUndo}>Undo</button>

        <button className="btn btn-primary mx-3 my-3" onClick={handleRedo}>Redo</button>

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


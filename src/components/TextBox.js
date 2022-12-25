import React, { useState } from 'react'

export default function TextBox() {
  const [text, setText] = useState("Sample text");

  function upclickHandler() {

    setText(text.toUpperCase());


  }
  function lowclickHandler() {
    setText(text.toLowerCase());
  }
  function clearHandler() {
    setText('');
  }

  function changeHandler(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div className="form-group">
        <textarea className="form-control my-4" value={text} onChange={changeHandler} id="textBox" rows="8"></textarea>
        <button className="btn btn-primary mx-2" onClick={upclickHandler}>Change to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={lowclickHandler}>Change to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearHandler}>Clear Text</button>
      </div>
      <div className="container">
        <h4 className='my-2'>Summary : {text.split(" ").length} words and {text.length} characters <i>Read Time : {(0.008 * text.split(" ").length).toFixed(2)} minutes</i></h4>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>

    </>
  )
}

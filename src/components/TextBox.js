import React, { useState } from "react";

export default function TextBox(props) {
  const [text, setText] = useState("");

  function upclickHandler() {
    setText(text.toUpperCase());
    props.showAlert("sucess", "Changed to Uppercase");
  }
  function lowclickHandler() {
    setText(text.toLowerCase());
    props.showAlert("sucess", "Changed to Lowercase");
  }
  function copyhandler() {
    navigator.clipboard.writeText(text);
    props.showAlert("sucess", "Copied to Clipboard");
  }
  function remHandler() {
    setText(text.replace(/\s+/g, ' ').trim())
    props.showAlert("sucess", "Extra spaces removed");
  }

  function clearHandler() {
    setText("");
    props.showAlert("sucess", "Cleared");
  }

  function changeHandler(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div className="form-group">
        <textarea
          className="form-control my-4"
          style={{
            color: props.mode === "dark" ? "white" : "#3e3b3b",
            background: props.mode === "dark" ? "#3e3b3b" : "white",
          }}
          value={text}
          onChange={changeHandler}
          id="textBox"
          rows="8"
        ></textarea>
        <button disabled={text<1} className="btn btn-primary mx-1 my-1" onClick={upclickHandler}>
          Change to Uppercase
        </button>
        <button disabled={text<1} className="btn btn-primary mx-1 my-1" onClick={lowclickHandler}>
          Change to Lowercase
        </button>
        <button disabled={text<1} className="btn btn-primary mx-1 my-1" onClick={remHandler}>
          Remove Extra Spaces
        </button>
        <button disabled={text<1} className="btn btn-primary mx-1 my-1" onClick={copyhandler}>
          Copy to ClipBoard
        </button>
        <button disabled={text<1} className="btn btn-primary mx-1 my-1" onClick={clearHandler}>
          Clear Text
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4 className="my-2">
          Summary :
          {
            text.split(/\s+/).filter(function(n) {
              return n !== "";
            }).length
          }{" "}
          words and {text.length} characters{" "}
          <i>
            Read Time : {(0.008 *text.split(/\s+/).filter(function(n) {
              return n !== "";
            }).length).toFixed(2)} minutes
          </i>
        </h4>

        <div
          className="accordion"
          id="accordionExample"
          style={{
            color: props.mode === "dark" ? "white" : "#3e3b3b",
            background: props.mode === "dark" ? "#3e3b3b" : "white",
          }}
        >
          <div
            className="accordion-item"
            style={{
              color: props.mode === "dark" ? "white" : "#3e3b3b",
              background: props.mode === "dark" ? "#3e3b3b" : "white",
            }}
          >
            <h2
              className="accordion-header"
              id="headingOne"
              style={{
                color: props.mode === "dark" ? "white" : "#3e3b3b",
                background: props.mode === "dark" ? "#3e3b3b" : "white",
              }}
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  color: props.mode === "dark" ? "white" : "#3e3b3b",
                  background: props.mode === "dark" ? "#3e3b3b" : "white",
                }}
              >
                Preview
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>{text.length > 0 ? text : "No preview"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

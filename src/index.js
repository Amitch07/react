import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false" contentEditable="true">
      Hello World
    </h1>
    <p> MY NAME IS AMIT</p>
    <img src={img + "?grayscale"} alt="random" />
  </div>,
  document.getElementById("root")
);

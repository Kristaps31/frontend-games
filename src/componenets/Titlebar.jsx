import React from "react";
import "../componenets_CSS/Titlebar.css"

function Titlebar() {
  return (
    <div className="titlebar">
      <div className="container">
        <h1>Real Game Reviews</h1>
        <button className="button">Sign In</button>
      </div>
    </div>
  );
}

export default Titlebar;

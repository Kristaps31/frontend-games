import React from "react";
import "../componenets_CSS/Popup.css";

export const Popup = ({ text, closePopup }) => {

  return (
    <div className="popup-container">
      <div className="popup-body">
        <h1>{text}</h1> 
        <button onClick={closePopup}>Close X</button>
      </div>
    </div>
  );
};

export default Popup;

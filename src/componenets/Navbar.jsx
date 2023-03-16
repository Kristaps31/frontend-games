import React from "react";
import "../componenets_CSS/Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ setCategory }) {
  const handleClick = (input) => () => {
    console.log(input)
    setCategory(input);
  };

  return (
    <div className="navbar">
      <h1>Find reviews by category</h1>
      <div className="selection">
        <Link className="react-link" to="/categories/strategy">
          <button onClick={handleClick("strategy")}>Strategy</button>
        </Link>

        <Link className="react-link" to="/categories/hidden-roles">
          <button onClick={handleClick("hidden-roles")}>Hidden-roles</button>
        </Link>

        <Link className="react-link" to="/categories/dexterity">
          <button onClick={handleClick("dexterity")}>Dexterity</button>
        </Link>

        <Link className="react-link" to="/categories/push-your-luck">
          <button onClick={handleClick("push-your-luck")}>Push-your-luck</button>
        </Link>

        <Link className="react-link" to="/categories/roll-and-write">
          <button onClick={handleClick("roll-and-write")}>Roll-and-write</button>
        </Link>

        <Link className="react-link" to="/categories/deck-building">
          <button onClick={handleClick("deck-building")}>Deck-building</button>
        </Link>

        <Link className="react-link" to="/categories/engine-building">
          <button onClick={handleClick("engine-building")}>Engine-building</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

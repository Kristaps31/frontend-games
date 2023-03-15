import "../componenets_CSS/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Find reviews by category</h1>
      <div className="selection">
        <button>Strategy</button>
        <button>Hidden-roles</button>
        <button>Dexterity</button>
        <button>Push-your-luck</button>
        <button>Roll-and-write</button>
        <button>Deck-building</button>
        <button>Engine-building</button>
      </div>
    </div>
  );
}

export default Navbar;

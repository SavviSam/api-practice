import "./App.css";
import { useState, useEffect } from "react";
import Starship from "./Starship";

function App() {
  const [starship, setStarship] = useState([]);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    async function getShips() {
      const spaceShip = await fetch("https://swapi.py4e.com/api/starships");
      const ships = await spaceShip.json();
      setStarship(ships.results);
    }
    getShips();
  }, []);

  const randomClick = () => {
    let randShip = starship[Math.floor(Math.random() * starship.length)];
    setDisplay(randShip);
    console.log(randShip);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>How many people can a Starship hold??</h1>
      </div>
      <div>
        <Starship
          name={display.name}
          shipClass={display.starship_class}
          passengers={display.passengers}
        />
        <button onClick={randomClick}>Click for a Starship</button>
      </div>
    </div>
  );
}

export default App;

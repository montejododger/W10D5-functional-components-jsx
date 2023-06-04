import bulb from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";

  const pokeCharacteristics = {
    type: "grass",
    move: "Vine Whip"
  };

  return (
    <div className="divStyle">
      <h1 className="styleH1">{favPokemon}'s Showcase Component</h1>
      <img src={bulb} alt={favPokemon} className="imgStyle" />
      <h2 className="styleH2">
        {favPokemon}'s type is{" "}
        <span className="spanOne">{pokeCharacteristics.type}</span> and one of
        their moves is{" "}
        <span className="spanTwo">{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;

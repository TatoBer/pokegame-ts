import { PokemonInfo } from "../types";
import "./PokeShowBox.css";

interface Props {
  pokemonInfo: PokemonInfo;
}

export default function PokeShowBox({ pokemonInfo }: Props) {
  let { name } = pokemonInfo;

  return (
    <div className="poke-show-box">
      <div className="first-div">
        <h3>{name?.toUpperCase().replace("-", " ").replace("-", " ").replace("-", " ").replace("-", " ")}</h3>
        <img
          className="primary-image"
          src={pokemonInfo.sprites.front_default}
          alt={pokemonInfo.name}
        />
        <img
          className="secondary-image"
          src={pokemonInfo.sprites.front_default}
          alt={pokemonInfo.name}
        />
      </div>
      <div className="second-div">
        {pokemonInfo.stats.map(stat=>{
            return <div key={stat.stat.name}>{stat.stat.name.toUpperCase().replace("-", " ")}: <b>{stat.base_stat}</b></div>
        })}
      </div>
    </div>
  );
}

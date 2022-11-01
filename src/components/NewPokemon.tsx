import { PokemonInfo } from "../types"
import "./NewPokemon.css"

interface Props {
  pokemon: PokemonInfo
}

export default function NewPokemon({pokemon}:Props) {
  return (
    <div className="new-pokemon-div">
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
    </div>
  )
}

import PokedexItem from "../components/PokedexItem";
import { AppProps } from "../types";
import "./Pokedex.css";

interface Props {
  APP_PROPS: AppProps;
}

export default function Pokedex({ APP_PROPS }: Props) {
  return (
    <main className="pokedex">
      {/* <PokemonPopUp pokemon={APP_PROPS.pokedex[5]} /> */}
      {APP_PROPS.pokedex.map((pokemon) => {
        return (
          <PokedexItem
            energy={APP_PROPS.energy}
            handleTrain={APP_PROPS.handleTrain}
            key={pokemon.id}
            pokemon={pokemon}
            favPokemon={APP_PROPS.favPokemon}
            discardPokemon={APP_PROPS.discardPokemon}
          />
        );
      })}
    </main>
  );
}

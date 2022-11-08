import usePokemons from "./usePokemons";
import useProfile from "./useProfile";
import { AppProps, Pokemon, PokemonInfo } from "../types";
import { deletePokemon, fullEnergy, handleFavPokemon, takePokemon, trainThePokemon } from "../services/localstorage";

const useAppProps = () => {
  const { charged, allPokemons, getRandomPokemon } = usePokemons();
  const { energy, wasteEnergy, pokedex, pick, handleTimePick, updatePokedex } =
    useProfile();

  const handleFreeHunt = async ():Promise<PokemonInfo> => {
    handleTimePick();
    return getRandomPokemon().then((res) => {
      takePokemon(res);
      updatePokedex();
      return res
    });
  };

  const handleTrain = (pokemonId:number)=> {
    wasteEnergy(10)
    trainThePokemon(pokemonId)
    updatePokedex()
  }
  
  const favPokemon = (pokemonId:number)=> {
    handleFavPokemon(pokemonId)
    updatePokedex()
  }

  const discardPokemon = (pokemonId: number) => {
    deletePokemon(pokemonId)
    fullEnergy()
    updatePokedex()
  }

  const APP_PROPS: AppProps = {
    charged,
    allPokemons,
    getRandomPokemon,
    energy,
    wasteEnergy,
    pokedex,
    pick,
    handleFreeHunt,
    handleTrain,
    favPokemon,
    discardPokemon
  };

  return APP_PROPS;
};

export default useAppProps;

import usePokemons from "./usePokemons";
import useProfile from "./useProfile";
import { AppProps } from "../types";
import { takePokemon } from "../services/localstorage";

const useAppProps = () => {
  const { charged, allPokemons, getRandomPokemon } = usePokemons();
  const { energy, wasteEnergy, pokedex, pick, handleTimePick, updatePokedex } =
    useProfile();

  const handleFreeHunt = () => {
    handleTimePick();
    getRandomPokemon().then((res) => {
      takePokemon(res);
      updatePokedex();
    });
  };

  const handleTrain = (pokemonId:number)=> {
    wasteEnergy(10)
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
    handleTrain
  };

  return APP_PROPS;
};

export default useAppProps;

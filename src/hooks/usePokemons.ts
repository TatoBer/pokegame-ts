import { useEffect, useState } from "react";
import {fetchPokemonInfo, getPokemons} from "../services/pokeapi";
import { Pokemon, PokemonInfo } from "../types";
import { allStatsInOne } from "../utils";

const usePokemons = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [charged, setCharged] = useState<Boolean>(false)


  useEffect(() => {
    getPokemons().then((response) => {
        setAllPokemons(response.results)
        setCharged(true)
    });
  }, []);


  const getRandomPokemon = async ()=> {
      const randomNumber = Math.round(Math.random()*allPokemons.length)
      const pokemon = allPokemons[randomNumber]
      const pokemonWithInfo = await fetchPokemonInfo(pokemon)
      return {...pokemonWithInfo, name: pokemon.name, fav: false, full_stat: allStatsInOne(pokemonWithInfo)}
  }



  return { allPokemons, charged, getRandomPokemon };
};

export default usePokemons
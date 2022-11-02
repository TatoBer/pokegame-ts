import { useEffect, useState } from "react";
import {fetchPokemonInfo, getPokemons} from "../services/pokeapi";
import { Pokemon, PokemonInfo } from "../types";

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
      return pokemonWithInfo
  }



  const getPokemonInfo = async (pokemon: Pokemon) => {
    return await fetchPokemonInfo(pokemon).then(response=>{
        return {...response, name: pokemon.name}
    })
  }




  return { allPokemons, getPokemonInfo, charged, getRandomPokemon };
};

export default usePokemons
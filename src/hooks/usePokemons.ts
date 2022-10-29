import { useEffect, useState } from "react";
import {fetchPokemonInfo, getPokemons} from "../services/pokeapi";
import { Pokemon, PokemonInfo } from "../types";

const usePokemons = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [charged, setCharged] = useState<Boolean>(false)
  const [randomPokemonWithInfo, setRandomPokemonWithInfo] = useState<PokemonInfo | null>(null)

  useEffect(() => {
    getPokemons().then((response) => {
        setAllPokemons(response.results)
        setCharged(true)
    });
  }, []);

  useEffect(()=>{
    allPokemons.length > 0 && randomizePokemonWithInfo()
  },[allPokemons])

  const getRandomPokemon = () => {
    const randomNum = Math.round(Math.random()*allPokemons.length)
    return allPokemons[randomNum]
  }

  const getPokemonInfo = async (pokemon: Pokemon) => {
    return await fetchPokemonInfo(pokemon).then(response=>{
        return {...response, name: pokemon.name}
    })
  }

  const getRandomPokemonWithInfo = async () => {
    const pokemon = getRandomPokemon()
    const pokemonInfo = await getPokemonInfo(pokemon)
    return pokemonInfo
  }

  const randomizePokemonWithInfo = ()=>{
    getRandomPokemonWithInfo().then(setRandomPokemonWithInfo)
  }



  return { allPokemons, getRandomPokemon, getPokemonInfo, randomizePokemonWithInfo, randomPokemonWithInfo , charged };
};

export default usePokemons
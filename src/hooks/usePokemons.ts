import { useEffect, useState } from "react";
import { leftTime } from "../services/localstorage";
import {fetchPokemonInfo, getPokemons} from "../services/pokeapi";
import { Pokemon, PokemonInfo } from "../types";

const usePokemons = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [charged, setCharged] = useState<Boolean>(false)
  const [randomPokemonWithInfo, setRandomPokemonWithInfo] = useState<PokemonInfo | null>(null)
  const [pick, setPick] = useState<null | number>(600)
  const [randomPokemon, setRandomPokemon] = useState<PokemonInfo>()

  useEffect(()=>{
    setTimeout(() => {
      updatePick()
    }, 1000);
  },[pick])

  useEffect(() => {
    getPokemons().then((response) => {
        setAllPokemons(response.results)
        setCharged(true)
    });
  }, []);


  useEffect(()=>{
    allPokemons.length > 0 && updateRandomPokemon()
  }, [allPokemons])

  const updateRandomPokemon = async ()=> {
      const randomNumber = Math.round(Math.random()*allPokemons.length)
      const pokemon = allPokemons[randomNumber]
      const pokemonWithInfo = await fetchPokemonInfo(pokemon)
      setRandomPokemon(pokemonWithInfo)
  }

  const updatePick = ()=> {
    const time: number = leftTime()
      if (time > 0) {
        setPick(time)
      } else setPick(null)
  }

  const resetPick = ()=>{
    setPick(600)
  }


  const getPokemonInfo = async (pokemon: Pokemon) => {
    return await fetchPokemonInfo(pokemon).then(response=>{
        return {...response, name: pokemon.name}
    })
  }




  return { resetPick, pick, allPokemons, getPokemonInfo, randomPokemonWithInfo , charged, randomPokemon, updateRandomPokemon };
};

export default usePokemons
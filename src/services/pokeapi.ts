import axios from "axios";
import { Pokemon, PokemonApiResponse, PokemonInfo } from "../types";

const getPokemons = (quantity: number = 100000) => {
  return axios
    .get<PokemonApiResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}&offset=0`)
    .then(res => res.data);
};

const fetchPokemonInfo = (pokemon: Pokemon) => {
    const { url } = pokemon
    return axios.get<PokemonInfo>(url).then(res => res.data)
}

export {getPokemons, fetchPokemonInfo};

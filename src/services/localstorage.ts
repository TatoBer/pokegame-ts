import { PokemonInfo } from "../types"

const takePokemon = (pokemonWithInfo: PokemonInfo)=>{
    const pokedex  = myPokedex()
    localStorage.setItem("pokedex", JSON.stringify([...pokedex, pokemonWithInfo]))
}

const myPokedex = ():PokemonInfo[]=>{
    let pokedex:string | null | PokemonInfo[] = localStorage.getItem("pokedex")
    if (pokedex) {
        const jsonPokedex = JSON.parse(pokedex)
        return jsonPokedex
    } 
     return []
}

export {takePokemon, myPokedex}
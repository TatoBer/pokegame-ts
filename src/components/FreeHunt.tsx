import "./FreeHunt.css";
import pokeballImg from "../img/pokeball.png";
import { fancyTimeFormat } from "../utils";
import CustomButton from "./CustomButton";
import { useState } from "react"
import { PokemonInfo } from "../types";
import NewPokemonNoti from "./NewPokemonNoti";

interface Props {
  pick: null | number;
  handleFreeHunt: Function;
}


export default function FreeHunt({ pick, handleFreeHunt }: Props) {
  const [hunted, setHunted]  = useState<PokemonInfo>()

  const updateHunt = async () => {
    setHunted(await handleFreeHunt())
  }

  const goHunt = ()=> {
    updateHunt()
  }
  const clearHunt = ()=>{
    setHunted(undefined)
  }

  return (
    <>
      {hunted && <NewPokemonNoti pokemon={hunted} closeClick={clearHunt}/>}
      <section className={`free-hunt ${pick && "inactive"}`}>
        <img src={pokeballImg} alt="Pokeball" />
        <span>
          <h3>FREE HUNT!</h3>
          <CustomButton onClick={() => !pick && goHunt()}>
            {!pick ? "TAKE POKEMON" : fancyTimeFormat(pick)}
          </CustomButton>
        </span>
      </section>
    </>
  );
}

import { PokemonInfo } from "../types";
import "./NewPokemonNoti.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import questionImg from "../img/question.webp"

interface Props {
  pokemon: PokemonInfo;
  closeClick: Function;
}

export default function NewPokemonNoti({ pokemon, closeClick }: Props) {
  const [close, setClose] = useState<Boolean>(false);

  const closePopUp = () => {
    setClose(true);
    setTimeout(() => {
      closeClick();
    }, 250);
  };

  return (
    <div className={`new-pokemon-noti ${close ? "off" : ""}`}>
      <AiFillCloseCircle
        onClick={() => {
          closePopUp();
        }}
      />
      <div>
        <h2>TU NUEVO POKEMON!!!</h2>
        <h3>{pokemon.name.toUpperCase().replaceAll("-"," ")}</h3>
        <img src={pokemon.sprites.front_default ? pokemon.sprites.front_default : questionImg} alt={pokemon.name} />
      </div>
    </div>
  );
}

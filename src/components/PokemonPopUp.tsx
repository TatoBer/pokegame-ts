import { PokemonInfo } from "../types";
import "./PokemonPopUp.css";
import questionImg from "../img/question.webp";
import CustomButton from "./CustomButton";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

interface Props {
  pokemon: PokemonInfo;
  closeClick: Function;
}

export default function PokemonPopUp({ pokemon, closeClick }: Props) {
  const [close, setClose] = useState<Boolean>(false);

  const closePopUp = () => {
    setClose(true);
    setTimeout(() => {
      closeClick();
    }, 250);
  };

  const frontSprite = pokemon.sprites.front_default;
  const backSprite = pokemon.sprites.back_default;
  return (
    <div className={`pokemon-popup ${close ? "off" : ""}`}>
      <AiFillCloseCircle onClick={() => closePopUp()} />
      <div>
        <div className="sprites">
          <img
            src={frontSprite ? frontSprite : questionImg}
            alt={pokemon.name}
          />
          <h3>{pokemon.name?.toUpperCase().replaceAll("-", " ")}</h3>
          <img
            src={
              backSprite ? backSprite : frontSprite ? frontSprite : questionImg
            }
            alt={pokemon.name}
          />
        </div>
        <div className="types">
          {pokemon.types.map((item) => {
            return (
              <h6 key={item.slot}>
                {item.type.name.toUpperCase().replaceAll("-", " ")}
              </h6>
            );
          })}
        </div>

        <div className="buttons-div">
          <CustomButton className="button-1">ENTRENAR</CustomButton>
          <CustomButton className="button-2">DESCARTAR</CustomButton>
        </div>
      </div>
    </div>
  );
}

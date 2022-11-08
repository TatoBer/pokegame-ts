import { PokemonInfo } from "../types";
import "./PokemonPopUp.css";
import questionImg from "../img/question.webp";
import CustomButton from "./CustomButton";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

interface Props {
  pokemon: PokemonInfo;
  closeClick: Function;
  trainPokemon: Function;
  energy: number;
  discardPokemon: Function
}

export default function PokemonPopUp({
  pokemon,
  closeClick,
  trainPokemon,
  energy,
  discardPokemon
}: Props) {
  const [close, setClose] = useState<Boolean>(false);

  const closePopUp = () => {
    setClose(true);
    setTimeout(() => {
      closeClick();
    }, 250);
  };

  const handleDiscard =() => {
    closePopUp()
    setTimeout(() => {
      discardPokemon(pokemon.id);
    }, 250);
  }

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
          <CustomButton
            onClick={() => trainPokemon(pokemon.id)}
            className={`button-1 ${energy < 10 ? "inactive" : ""}`}
          >
            ENTRENAR
          </CustomButton>
          <CustomButton onClick={()=>handleDiscard()} className="button-2">DESCARTAR</CustomButton>
        </div>

        <div className="stats">
          <h4>ESTADISTICAS:</h4>
          <h6>
            HP:{" "}
            <b>
              {pokemon.stats[0].base_stat}
              {pokemon.plus_stats && (
                <b>{" +" + pokemon.plus_stats[0].base_stat}</b>
              )}
            </b>
          </h6>
          <h6>
            ATAQUE:{" "}
            <b>
              {pokemon.stats[1].base_stat}
              {pokemon.plus_stats && (
                <b>{" +" + pokemon.plus_stats[1].base_stat}</b>
              )}
            </b>
          </h6>
          <h6>
            DEFENSA:{" "}
            <b>
              {pokemon.stats[2].base_stat}
              {pokemon.plus_stats && (
                <b>{" +" + pokemon.plus_stats[2].base_stat} </b>
              )}
            </b>
          </h6>
          <h6>
            ATAQUE ESPECIAL:{" "}
            <b>
              {pokemon.stats[3].base_stat}
              {pokemon.plus_stats && (
                <b>{" +" + pokemon.plus_stats[3].base_stat}</b>
              )}
            </b>
          </h6>
          <h6>
            DEFENSA ESPECIAL:{" "}
            <b>
              {pokemon.stats[4].base_stat}
              {pokemon.plus_stats && (
                <b>{" +" + pokemon.plus_stats[4].base_stat}</b>
              )}
            </b>
          </h6>
          <h6>
            VELOCIDAD: <b>{pokemon.stats[5].base_stat}</b>
          </h6>
        </div>
      </div>
    </div>
  );
}

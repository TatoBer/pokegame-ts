import { PokemonInfo } from "../types";
import "./PokedexItem.css";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import questionImg from "../img/question.webp";
import CustomButton from "./CustomButton";
import PokemonPopUp from "./PokemonPopUp";
import usePokemonPopUp from "../hooks/usePokemonPopUp";

interface Props {
  pokemon: PokemonInfo;
  handleTrain: Function;
  energy: number;
}

export default function PokedexItem({ pokemon, handleTrain, energy }: Props) {

  const { closePopUp, openPopUp, popUp } = usePokemonPopUp()
  const frontSprite = pokemon.sprites.front_default;

  return (
    <>
      <div className={`pokedex-item`}>
          <h4>{pokemon.name?.toUpperCase().replaceAll("-", " ")}</h4>
        <img src={frontSprite ? frontSprite : questionImg} alt=" " />
        <div>
        <span>
          {pokemon.types.map((item) => {
            return (
              <h6 key={item.slot}>
                {item.type.name.toUpperCase().replaceAll("-", " ")}
              </h6>
            );
          })}
        </span>
          <h5>EXP: {pokemon.experience || 0}</h5>
        </div>
        <CustomButton onClick={openPopUp} className="button-1">
          INFO
        </CustomButton>
        <CustomButton
          onClick={() => handleTrain()}
          className={`button-2 ${energy < 10 ? "inactive" : ""}`}
        >
          ENTRENAR
        </CustomButton>
        <MdOutlineCatchingPokemon className="back-svg" />
        <p className="background"></p>
      </div>
      {popUp ? (
        <PokemonPopUp
          pokemon={pokemon}
          closeClick={closePopUp}
        />
      ) : null}
    </>
  );
}

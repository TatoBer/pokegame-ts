import { PokemonInfo } from "../types";
import "./PokedexItem.css";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import questionImg from "../img/question.webp";
import CustomButton from "./CustomButton";
import PokemonPopUp from "./PokemonPopUp";
import usePokemonPopUp from "../hooks/usePokemonPopUp";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import {numberWithCommas} from "../utils"

interface Props {
  pokemon: PokemonInfo;
  handleTrain: Function;
  energy: number;
  favPokemon: Function
  discardPokemon: Function
}
 
export default function PokedexItem({ pokemon, handleTrain, energy, favPokemon, discardPokemon }: Props) {
  const { closePopUp, openPopUp, popUp } = usePokemonPopUp();
  const frontSprite = pokemon.sprites.front_default;
  
  return (
    <>
      <div className={`pokedex-item ${pokemon.fav ? "fav" : ""}`}>
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
          <h5>EXP: { pokemon.experience ? numberWithCommas(pokemon.experience) : 0}</h5>
        </div>
        <AiOutlineStar onClick={()=>favPokemon(pokemon.id)} className="star-off" />
        <AiFillStar className="star-on" />
        <CustomButton onClick={openPopUp} className="button-2">
          INFO
        </CustomButton>
        <MdOutlineCatchingPokemon className="back-svg" />
        <p className="background"></p>
      </div>
      {popUp ? (
        <PokemonPopUp
          pokemon={pokemon}
          closeClick={closePopUp}
          trainPokemon={handleTrain}
          energy={energy}
          discardPokemon={discardPokemon}
        />
      ) : null}
    </>
  );
}

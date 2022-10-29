import { usePokeScroll } from "../hooks/usePokeScroll";
import { myPokedex } from "../services/localstorage";
import "./MyPokedex.css";
import PokeShowBox from "./PokeShowBox";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { numberWithCommas } from "../numberWithCommas";

export default function MyPokedex() {
  const pokedex = myPokedex();
  const { nextNumber, positionScroll, prevNumber } = usePokeScroll();
  return (
    <section className="my-pokedex">
      <h2>MY POKEDEX ({numberWithCommas(pokedex.length)})</h2>
      <div>
        <AiOutlineArrowLeft onClick={()=>{prevNumber(pokedex.length)}} />
        <PokeShowBox pokemonInfo={pokedex[positionScroll]} />
        <AiOutlineArrowRight onClick={()=>{nextNumber(pokedex.length)}} />
      </div>
    </section>
  );
}

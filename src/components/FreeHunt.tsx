import "./FreeHunt.css";
import pokeballImg from "../img/pokeball.png";
import { fancyTimeFormat } from "../utils";
import CustomButton from "./CustomButton";

interface Props {
  pick: null | number;
  handleFreeHunt: Function;
}

export default function FreeHunt({ pick, handleFreeHunt }: Props) {
  return (
    <section className={`free-hunt ${pick && "inactive"}`}>
      <img src={pokeballImg} alt="Pokeball" />
      <span>
        <h3>FREE HUNT!</h3>
        <CustomButton onClick={() => !pick && handleFreeHunt()}>
          {!pick ? "TAKE POKEMON" : fancyTimeFormat(pick)}
        </CustomButton>
      </span>
    </section>
  );
}

import { updateLastPick } from "../services/localstorage";
import { fancyTimeFormat } from "../utils";
import "./PickPokemon.css";

interface Props {
  pick: null | number
  reset: Function
}
export default function PickPokemon({ pick, reset }: Props) {
  return (
    <>
      {!pick ? (
        <button
          onClick={() => {
            updateLastPick();
            reset();
          }}
          className={`your-button active`}
        >
          NEW POKEMON!!!
        </button>
      ) : (
        <button className={`your-button`}>{fancyTimeFormat(pick)}</button>
      )}
    </>
  );
}

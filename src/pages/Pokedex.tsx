import { AppProps } from "../types";

interface Props {
  APP_PROPS: AppProps;
}

export default function Pokedex({ APP_PROPS }: Props) {
  return (
    <main className="pokedex">
      {APP_PROPS.pokedex.map(pokemon=>{return <h4>{pokemon.name}</h4>})}
    </main>
  );
}

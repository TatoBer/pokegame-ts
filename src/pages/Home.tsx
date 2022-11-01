import { AppProps } from "../types";

interface Props {
  APP_PROPS: AppProps;
}

export default function Home({ APP_PROPS }: Props) {
  return (
    <main className="home">
      <h1>{String(APP_PROPS.randomPokemon?.name)}</h1>
      <button
        style={{ color: "black", padding: "5px" }}
        onClick={() => {
          APP_PROPS.wasteEnergy(10);
        }}
      >
        GASTAR 10 DE ENERGIA
      </button>
    </main>
  );
}

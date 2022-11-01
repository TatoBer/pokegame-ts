import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import NavMain from "./components/NavMain";
import usePokemons from "./hooks/usePokemons";
import useProfile from "./hooks/useProfile";
import Home from "./pages/Home";
import { AppProps } from "./types";

function App() {
  const { charged, allPokemons, updateRandomPokemon, randomPokemon } =
    usePokemons();
  const { energy, wasteEnergy } = useProfile();

  const APP_PROPS: AppProps = {
    charged,
    allPokemons,
    randomPokemon,
    updateRandomPokemon,
    energy,
    wasteEnergy,
  };

  return (
    <>
      <BrowserRouter>
        <Loading charged={charged} />
        <NavMain APP_PROPS={APP_PROPS} />

        <Routes>
          <Route path="/" element={<Home APP_PROPS={APP_PROPS} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

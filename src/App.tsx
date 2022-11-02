import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import NavMain from "./components/NavMain";
import useAppProps from "./hooks/useAppProps";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";

function App() {

  const APP_PROPS = useAppProps()

  return (
    <>
      <BrowserRouter>
        <Loading charged={APP_PROPS.charged} />
        <NavMain APP_PROPS={APP_PROPS} />

        <Routes>
          <Route path="/" element={<Home APP_PROPS={APP_PROPS} />} />
          <Route path="/pokedex" element={<Pokedex APP_PROPS={APP_PROPS} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

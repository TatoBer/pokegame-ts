import "./NavMain.css";
import { Link, useLocation } from "react-router-dom";
import { TbPokeball } from "react-icons/tb";
import EnergyBar from "./EnergyBar";
import { AppProps } from "../types";

interface Props {
  APP_PROPS: AppProps
}

export default function NavMain({APP_PROPS}:Props) {
  const location = useLocation();
  return (
    <nav className="main-nav">
      <div>
        <Link className={location.pathname === "/" ? "selected" : ""} to="/">
          INICIO
        </Link>
        <Link
          className={location.pathname.includes("/pokedex") ? "selected" : ""}
          to="/pokedex"
        >
          POKEDEX
        </Link>
        <TbPokeball />
        <Link
          className={location.pathname.includes("/shop") ? "selected" : ""}
          to="/shop"
        >
          TIENDA
        </Link>
        <Link className={location.pathname === "/arena" ? "selected" : ""} to="/arena">
          ARENA
        </Link>
      <EnergyBar energy={APP_PROPS.energy}/>
      </div>

    </nav>
  );
}

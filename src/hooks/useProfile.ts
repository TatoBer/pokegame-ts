import { useEffect, useState } from "react";
import {
  consumeEnergy,
  getUpdatedEnergy,
  leftTime,
  myPokedex,
  updateLastPick,
} from "../services/localstorage";
import { PokemonInfo } from "../types";

const useProfile = () => {
  const [energy, setEnergy] = useState<number>(getUpdatedEnergy());
  const [pokedex, setPokedex] = useState<PokemonInfo[]>(myPokedex());
  const [pick, setPick] = useState<null | number>(leftTime() > 0 ? leftTime() : null);

  useEffect(() => {
    setInterval(() => {
      updateEnergy();
    }, 3000);
    setInterval(() => {
        updatePick();
    }, 1000);
  }, []);

  const updatePick = () => {
    const time: number = leftTime();
    if (time > 0) {
      setPick(time);
    } else setPick(null);
  };

  const handleTimePick = ()=> {
    updateLastPick()
    updatePick()
  }

  const updateEnergy = () => {
    setEnergy(getUpdatedEnergy());
  };

  const updatePokedex = ()=> {
    setPokedex(myPokedex())
  }

  const wasteEnergy = (n: number): boolean => {
    if (n > energy) return false;
    consumeEnergy(n);
    updateEnergy();
    return true;
  };

  return { pick , handleTimePick, energy, wasteEnergy, pokedex, updatePokedex };
};

export default useProfile;

import { useEffect, useState } from "react";
import { consumeEnergy, getUpdatedEnergy } from "../services/localstorage";

const useProfile = () => {
  const [energy, setEnergy] = useState<number>(getUpdatedEnergy());

  useEffect(() => {
    setInterval(() => {
      updateEnergy();
    }, 3000);
  }, []);

  const updateEnergy = () => {
    setEnergy(getUpdatedEnergy());
  };

  const wasteEnergy = (n: number): boolean => {
    if (n > energy) return false;
    consumeEnergy(n);
    updateEnergy();
    return true;
  };

  return { energy, wasteEnergy };
};

export default useProfile;

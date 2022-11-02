import { useState } from "react";

const usePokemonPopUp = () => {
  const [popUp, setPopUp] = useState<Boolean>(false);

  const closePopUp = () => {

      setPopUp(false);

  };

  const openPopUp = () => {
    setPopUp(true);
  };
  return { openPopUp, popUp, closePopUp};
};

export default usePokemonPopUp;

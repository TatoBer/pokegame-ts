import { EnergyData, PokemonInfo } from "../types";
import { compareWithFav, compareWithId, compareWithStat, getActualTime } from "../utils";

const takePokemon = (pokemonWithInfo: PokemonInfo) => {
  const pokedex = myPokedex();
  localStorage.setItem(
    "pokedex",
    JSON.stringify([...pokedex, pokemonWithInfo])
  );
};

const updatePokedex = (newPokedex: PokemonInfo[]) => {
  localStorage.setItem("pokedex", JSON.stringify(newPokedex));
};

const myPokedex = (): PokemonInfo[] => {
  let pokedex: string | null | PokemonInfo[] = localStorage.getItem("pokedex");
  if (pokedex) {
    let jsonPokedex: PokemonInfo[] = JSON.parse(pokedex);
    return jsonPokedex.sort(compareWithStat).sort(compareWithFav);
  }
  return [];
};

const timpStampNow = (): number => {
  let date1: Date | number = new Date();
  date1 = Date.parse(String(date1)) / 1000;
  return date1;
};

const updateLastPick = () => {
  localStorage.setItem("lastPick", String(timpStampNow()));
};

const getLastPick = (): number => {
  return Number(localStorage.getItem("lastPick"));
};

const leftTime = () => {
  let actualDate = getActualTime();
  const lastOpen: number = actualDate - getLastPick();
  const timeToOpen = 3600;
  const left = timeToOpen - lastOpen;
  return left;
};

const setEnergyData = (energy: number) => {
  let actualDate = getActualTime();
  const energyData: EnergyData = { time: actualDate, energy };
  const stringifyData = JSON.stringify(energyData);
  localStorage.setItem("energy", stringifyData);
};

const getEnergy = (): EnergyData => {
  let lastEnergy = localStorage.getItem("energy");
  if (lastEnergy === null) {
    setEnergyData(100);
    lastEnergy = localStorage.getItem("energy");
  }
  if (lastEnergy !== null) return JSON.parse(lastEnergy);
  return { time: 0, energy: 100 };
};

const consumeEnergy = (e: number) => {
  const newEnergy = getUpdatedEnergy() - e;
  setEnergyData(newEnergy);
};

const fullEnergy = ()=> {
  setEnergyData(100)
}

const getUpdatedEnergy = (): number => {
  const energyData = getEnergy();
  if (energyData.energy === 100) return 100;
  const secondRuns: number = getActualTime() - energyData.time;
  const energyPlus: number = Math.floor(secondRuns / 60);
  const energy: number = energyData.energy + energyPlus;
  if (energy > 99) return 100;
  return energy;
};

const trainThePokemon = (pokemonId: number) => {
  let pokedex = myPokedex();
  let pokemon = pokedex.filter((poke) => poke.id === pokemonId)[0];
  pokedex = pokedex.filter((poke) => poke.id !== pokemonId);
  pokemon = experienceUp(pokemon);
  updatePokedex([...pokedex, pokemon]);
};

const experienceUp = (pokemon: PokemonInfo) => {
  const experiencePlus = Math.round(Math.random() * 200) + 100;
  if (pokemon.experience === undefined) {
    pokemon = { ...pokemon, experience: experiencePlus };
  } else {
    pokemon = { ...pokemon, experience: pokemon.experience + experiencePlus };
  }
  const pokemonStatsPlus = pokemon.stats.map((stat) => {
    return {
      base_stat: Math.round(
        stat.base_stat *
          (1 + (pokemon.experience ? pokemon.experience : 0) * 0.000033) -
          stat.base_stat
      ),
      stat: { name: stat.stat.name },
    };
  });
  return { ...pokemon, plus_stats: pokemonStatsPlus };
};

const handleFavPokemon = (pokemonId: number) => {
  let pokedex = myPokedex();
  let pokemon = pokedex.filter((poke) => poke.id === pokemonId)[0];
  pokedex = pokedex.filter((poke) => poke.id !== pokemonId);
  pokemon = {...pokemon, fav: !pokemon.fav}
  updatePokedex([...pokedex, pokemon])
}

const deletePokemon = (pokemonId: number) => {
  let pokedex = myPokedex();
  pokedex = pokedex.filter((poke) => poke.id !== pokemonId);
  updatePokedex(pokedex)
}

export {
  fullEnergy,
  getUpdatedEnergy,
  takePokemon,
  myPokedex,
  updateLastPick,
  leftTime,
  consumeEnergy,
  trainThePokemon,
  handleFavPokemon,
  deletePokemon
};

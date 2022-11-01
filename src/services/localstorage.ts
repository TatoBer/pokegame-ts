import { EnergyData, PokemonInfo } from "../types";
import { getActualTime } from "../utils";

const takePokemon = (pokemonWithInfo: PokemonInfo) => {
  const pokedex = myPokedex();
  localStorage.setItem(
    "pokedex",
    JSON.stringify([...pokedex, pokemonWithInfo])
  );
};

const myPokedex = (): PokemonInfo[] => {
  let pokedex: string | null | PokemonInfo[] = localStorage.getItem("pokedex");
  if (pokedex) {
    const jsonPokedex = JSON.parse(pokedex);
    return jsonPokedex;
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
  const timeToOpen = 600;
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

const getUpdatedEnergy = (): number => {
  const energyData = getEnergy();
  if (energyData.energy === 100) return 100;
  const secondRuns: number = getActualTime() - energyData.time;
  const energyPlus: number = Math.floor(secondRuns / 30);
  const energy: number = energyData.energy + energyPlus;
  if (energy > 99) return 100;
  return energy;
};

export {
  getUpdatedEnergy,
  takePokemon,
  myPokedex,
  updateLastPick,
  leftTime,
  consumeEnergy,
};

export interface PokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonInfo {
  name: string;
  experience?: number
  plus_stats?: {
    base_stat: number;
    stat: { name: string};
  }[]
  fav: Boolean
  abilities: Ability[];
  full_stat: number
  base_experience: number;
  forms: { name: string; url: string }[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: { move: { name: string; url: string } }[];
  order: number;
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  types: { slot: number; type: { name: string; url: string } }[];
  weight: number;
}

interface Ability {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}

export interface AppProps {
  charged: Boolean;
  allPokemons: Pokemon[];
  getRandomPokemon: Function;
  energy: number;
  wasteEnergy: Function;
  pokedex: PokemonInfo[]
  pick: number | null
  handleFreeHunt: Function
  handleTrain: Function
  favPokemon: Function
  discardPokemon: Function
}

export interface EnergyData {
  time: number;
  energy: number;
}

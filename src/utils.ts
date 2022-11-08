import { Pokemon, PokemonInfo } from "./types";

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function fancyTimeFormat(duration: number): string {
  var hrs = ~~(duration / 3600);
  var mins = ~~((duration % 3600) / 60);
  var secs = ~~duration % 60;

  var ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

function compareWithId( a:PokemonInfo, b:PokemonInfo ) {
  if ( a.id < b.id ){
    return -1;
  }
  if ( a.id > b.id ){
    return 1;
  }
  return 0;
}

function compareWithStat( a:PokemonInfo, b:PokemonInfo ) {
  if ( a.full_stat < b.full_stat ){
    return 1;
  }
  if ( a.full_stat > b.full_stat ){
    return -1;
  }
  return 0;
}


function compareWithFav( a:PokemonInfo, b:PokemonInfo ) {
  if ( a.fav < b.fav ){
    return 1;
  }
  if ( a.fav > b.fav ){
    return -1;
  }
  return 0;
}


const getActualTime = (): number => {
  let actualDate: Date | number = new Date();
  actualDate = Date.parse(String(actualDate)) / 1000;
  return actualDate;
};

const allStatsInOne = (pokemon: PokemonInfo):number => {
  return pokemon.stats[0].base_stat + pokemon.stats[1].base_stat + pokemon.stats[2].base_stat + pokemon.stats[3].base_stat + pokemon.stats[4].base_stat
}

export { numberWithCommas, getActualTime, fancyTimeFormat, compareWithId, compareWithFav, allStatsInOne, compareWithStat };

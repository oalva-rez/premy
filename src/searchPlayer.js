import { Player, options } from "./index.js";
import $ from "jquery";

async function getUserGuess() {
  try {
    let searchInput = $("#search-field").val();
    // normalized to remove accents/diacritics
    searchInput = searchInput
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    searchInput = encodeURI(searchInput);

    let res = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/players?league=39&search=${searchInput}`,
      options
    );
    let data = await res.json();
    data = data.response[0];
    // create user guess object
    let userGuess = new Player(
      data.player.name,
      data.statistics[0].team.name,
      data.player.nationality,
      data.statistics[0].games.position,
      data.player.height,
      data.player.age,
      data.player.photo,
      data.statistics[0].team.logo
    );
    return userGuess;
  } catch (err) {
    console.log(err);
  }
}

export { getUserGuess };

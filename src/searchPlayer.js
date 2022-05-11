import { Player, options } from "./index.js";

async function getUserGuess() {
  try {
    let searchInput = $("#search-field").val();
    searchInput = searchInput
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    searchInput = encodeURI(searchInput);
    console.log(searchInput);

    let res = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/players?league=39&search=${searchInput}`,
      options
    );
    let data = await res.json();
    data = data.response[0];
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

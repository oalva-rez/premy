import { Player } from "./index.js";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "bb2bcd95f3mshea301c28c7ab66ap16ff4fjsneee023426a50",
  },
};
async function getUserGuess() {
  try {
    let searchInput = $("#search-field").val();

    searchInput = encodeURI(searchInput);

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

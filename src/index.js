import "./style.css";
import { displayGuess } from "./displayGuess";

import { getUserGuess } from "./searchPlayer.js";
class Player {
  constructor(name, team, nationality, position, height, age) {
    this.name = name;
    this.team = team;
    this.nationality = nationality;
    this.position = position;
    this.height = height;
    this.age = age;
  }
}
async function getRndPlayer() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "bb2bcd95f3mshea301c28c7ab66ap16ff4fjsneee023426a50",
    },
  };

  // random number generator
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // fetch random player from top scorers pool -- idea is to retrieve random well known player

  try {
    const res = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2020",
      options
    );
    let data = await res.json();
    let arrLength = await data.response.length;
    const rndInt = randomIntFromInterval(1, arrLength - 1);
    data = await data.response[rndInt];

    let rndPlayer = new Player(
      data.player.name,
      data.statistics[0].team.name,
      data.player.nationality,
      data.statistics[0].games.position,
      data.player.height,
      data.player.age
    );
    // let rndPlayer = new Player(
    //   "M. Rashford",
    //   "chelsea",
    //   "mexico",
    //   "attacker",
    //   "5'9",
    //   "24"
    // );
    // //temporary
    // let userGuess = new Player(
    //   "ozkar alvarez",
    //   "chelsea",
    //   "mexico",
    //   "midfield",
    //   "5'8",
    //   "30"
    // );
    console.log(rndPlayer);

    let input = document.getElementById("search-field");
    input.addEventListener("keypress", async function (event) {
      if (event.key === "Enter") {
        console.log("working");
        let userGuess = await getUserGuess();
        displayGuess(rndPlayer, userGuess);

        event.preventDefault();
      }
    });
  } catch (err) {
    console.log(err);
  }
}

getRndPlayer();

export { getRndPlayer, Player };

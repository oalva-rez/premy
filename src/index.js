import "./style.css";
import { displayGuess } from "./displayGuess";
import { gameOver } from "./gameOver";
import { getUserGuess } from "./searchPlayer.js";
class Player {
  constructor(
    name,
    team,
    nationality,
    position,
    height,
    age,
    imgSrc,
    teamImgSrc
  ) {
    this.name = name;
    this.team = team;
    this.nationality = nationality;
    this.position = position;
    this.height = height;
    this.age = age;
    this.imgSrc = imgSrc;
    this.teamImgSrc = teamImgSrc;
  }

  getIntegerHeight() {
    let integer = parseInt(this.height.split(" ")[0]);
    return integer;
  }
  getFeet() {
    const realFeet = (this.getIntegerHeight() * 0.3937) / 12;
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches + '"';
  }
}
let rndPlayer, userGuess;
async function getRndPlayer() {
  let round = 7;
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

  try {
    // fetch random player from top scorers pool -- idea is to retrieve random well known player
    const res = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2021",
      options
    );
    let data = await res.json();
    console.log(data);

    let arrLength = await data.response.length;
    const rndInt = randomIntFromInterval(0, arrLength - 1);

    data = await data.response[rndInt];
    rndPlayer = new Player(
      data.player.name,
      data.statistics[0].team.name,
      data.player.nationality,
      data.statistics[0].games.position,
      data.player.height,
      data.player.age,
      data.player.photo,
      data.statistics[0].team.logo
    );
    console.log(rndPlayer);

    // rndPlayer = new Player(
    //   "M. Rashford",
    //   "chelsea",
    //   "mexico",
    //   "attacker",
    //   "127 cm",
    //   "24",
    //   "https://media.api-sports.io/football/players/3247.png",
    //   "https://media.api-sports.io/football/teams/52.png"
    // );
    // //temporary
    // userGuess = new Player(
    //   "M. Rashfords",
    //   "chelsea",
    //   "mexico",
    //   "midfield",
    //   "120 cm",
    //   "30",
    //   "https://media.api-sports.io/football/players/3247.png",
    //   "https://media.api-sports.io/football/teams/52.png"
    // );

    let input = document.getElementById("search-field");
    input.addEventListener("keypress", async function (event) {
      if (event.key === "Enter") {
        $(".err").text("");
        userGuess = await getUserGuess();

        if (userGuess !== undefined && round > 1) {
          round--;
          $(".attempts").text("");
          $("#search-field").val("");
          $(".attempts").text(round);
          displayGuess(rndPlayer, userGuess);
          if (rndPlayer.name == userGuess.name) {
            gameOver(true);
          }
        } else if (userGuess == undefined) {
          $(".err").text("No player found.");
          $("#search-field").val("");
        } else if (round == 1) {
          round--;
          $("#search-field").val("");
          $(".attempts").text("");
          $(".attempts").text(round);
          if (rndPlayer.name !== userGuess.name) {
            gameOver(false);
          }
          if (rndPlayer.name == userGuess.name) {
            gameOver(true);
          }
        }

        event.preventDefault();
      }
    });
  } catch (err) {
    console.log(err);
  }
}

getRndPlayer();

export { getRndPlayer, Player, rndPlayer, userGuess };

import { gameOver } from "./gameOver.js";
import $ from "jquery";

/**
 * Compare user guess to random player.
 * @param {Object} rndPlayer - The Player instance of the player chosen at random on game initialization.
 * @param {Object} userGuess - The Player instance of the user guess.
 */
function displayGuess(rndPlayer, userGuess) {
  // create DOM element for user guess
  let tableContainer = $(".table__content");
  let tableRow = $("<div>").addClass("table__row");
  let name = $("<div>").append(userGuess.name).addClass("table__cell");
  let team = $("<img>", {
    src: userGuess.teamImgSrc,
    width: "47px",
    alt: `${userGuess.team} badge logo`,
  });
  let teamContainer = $("<div>", { class: "table__cell" }).append(team);
  let nationality = $("<div>")
    .append(userGuess.nationality)
    .addClass("table__cell");
  let position = $("<div>").append(userGuess.position).addClass("table__cell");
  let height = $("<div>").append(userGuess.getFeet()).addClass("table__cell");
  let age = $("<div>").append(userGuess.age).addClass("table__cell");

  // check team
  if (rndPlayer.team == userGuess.team) {
    teamContainer.addClass("green");
  }
  // check nationality
  if (rndPlayer.nationality == userGuess.nationality) {
    nationality.addClass("green");
  }
  //check position
  if (rndPlayer.position == userGuess.position) {
    position.addClass("green");
  }

  // height check
  if (rndPlayer.height == userGuess.height) {
    height.addClass("green");
  }
  if (rndPlayer.getIntegerHeight() > userGuess.getIntegerHeight()) {
    height.append("<span class='arrow'> ↑</span>");
  }
  if (rndPlayer.getIntegerHeight() < userGuess.getIntegerHeight()) {
    height.append("<span class='arrow'> ↓</span>");
  }

  // age check
  if (rndPlayer.age == userGuess.age) {
    age.addClass("green");
  }
  if (rndPlayer.age > userGuess.age) {
    age.append("<span class='arrow'> ↑</span>");
  }
  if (rndPlayer.age < userGuess.age) {
    age.append("<span class='arrow'> ↓</span>");
  }

  tableRow.append(name, teamContainer, nationality, position, height, age);
  tableContainer.append(tableRow.hide().fadeIn(1200));
}

export { displayGuess };

import { rndPlayer, userGuess } from "./index";
import $ from "jquery";
import jQuery from "jquery-modal";

function gameOver(isWin) {
  if (isWin) {
    $("#search-field").prop("disabled", true); // disable input

    // create winner modal elements
    let heading = $("<h1>").text("You Guessed Correctly!");
    let playerName = $("<p>").text(rndPlayer.name);
    let playerImg = $("<img>", {
      src: rndPlayer.imgSrc,
      alt: `Headshot image of ${rndPlayer.name}`,
    });
    let playAgainBtn = $("<button>")
      .text("Play Again")
      .click(() => {
        location.reload();
      });
    $("#sticky").append(heading, playerName, playerImg, playAgainBtn);
    // open non-closable modal
    $("#sticky").modal({
      escapeClose: false,
      clickClose: false,
      showClose: false,
    });
  } else {
    $("#search-field").prop("disabled", true); // disable input
    // create loser modal elements
    let heading = $("<h1>").text("You Lose!");
    let text = $("<p>").text("Answer:");
    let playerName = $("<p>").text(rndPlayer.name);
    let playerImg = $("<img>", {
      src: rndPlayer.imgSrc,
      alt: `Headshot image of ${rndPlayer.name}`,
    });
    let playAgainBtn = $("<button>")
      .text("Play Again")
      .click(() => {
        location.reload();
      });
    $("#sticky").append(heading, text, playerName, playerImg, playAgainBtn);

    // open non-closable modal
    $("#sticky").modal({
      escapeClose: false,
      clickClose: false,
      showClose: false,
    });
  }
}

export { gameOver };

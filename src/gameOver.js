import { rndPlayer, userGuess } from "./index";

function gameOver(isWin) {
  if (isWin) {
    console.log("You Win!");
    console.log(rndPlayer);

    $("#search-field").prop("disabled", true);
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

    $("#sticky").modal({
      escapeClose: false,
      clickClose: false,
      showClose: false,
    });
  } else {
    console.log("You Lose!");
    $("#search-field").prop("disabled", true);
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

    $("#sticky").modal({
      escapeClose: false,
      clickClose: false,
      showClose: false,
    });
  }
}

export { gameOver };

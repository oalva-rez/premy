function displayGuess(rndPlayer, userGuess) {
  let tableContainer = $(".table__content");
  let tableRow = $("<div>").addClass("table__row");
  let name = $("<div>").append(userGuess.name).addClass("table__cell");
  let team = $("<div>").append(userGuess.team).addClass("table__cell");
  let nationality = $("<div>")
    .append(userGuess.nationality)
    .addClass("table__cell");
  let position = $("<div>").append(userGuess.position).addClass("table__cell");
  let height = $("<div>").append(userGuess.height).addClass("table__cell");
  let age = $("<div>").append(userGuess.age).addClass("table__cell");

  if (rndPlayer.name == userGuess.name) {
    console.log("GAME OVER");
    // gameOver();
  }
  if (rndPlayer.team == userGuess.team) {
    team.addClass("green");
  }
  if (rndPlayer.nationality == userGuess.nationality) {
    nationality.addClass("green");
  }
  if (rndPlayer.position == userGuess.position) {
    position.addClass("green");
  }
  if (rndPlayer.height == userGuess.height) {
    height.addClass("green");
  }
  if (rndPlayer.age == userGuess.age) {
    age.addClass("green");
  }
  tableRow.append(name, team, nationality, position, height, age);
  tableContainer.append(tableRow);
}

export { displayGuess };

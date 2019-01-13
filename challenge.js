// Variables
var diceString = "images/dice";
var pngString = ".png";
var diceLimit = 6;
var randomNumberIterator = 7;
var draw = "draw";
var player1Won = "🚩 Player 1 Won";
var player2Won = "Player 2 Won 🚩";

//functions
function getRandomDiceRoll(){
  var randomDiceRoll;
  for (var i = 0; i < randomNumberIterator; i++) {
    randomDiceRoll = Math.floor(Math.random() * diceLimit) + 1;
    return randomDiceRoll;
  }
}

function checkIfPlayer1Won(dice1, dice2){
  if (dice1 > dice2) {
    return true;
  }else if (dice2 > dice1) {
    return false;
  }else{
    return draw;
  }
}

function manipulateHTML(dice1, dice2){
  var value = checkIfPlayer1Won(dice1, dice2);
  if (value === draw) {
     changeHeader("🚩 Its a draw 🚩");
  }else if (value === true) {
    changeHeader(player1Won);
  }else if (value === false) {
    changeHeader(player2Won);
  }else{
    changeHeader("Invalid");
  }
}

function changeHeader(string){
  document.querySelector(".header").innerText = string;
}

function changeDiceImage(location1, location2){
  document
  .querySelector(".player1 img")
  .setAttribute("src", location1);

  document
  .querySelector(".player2 img")
  .setAttribute("src", location2);
}

//main function flow
var dice1Value = getRandomDiceRoll();
var dice2Value = getRandomDiceRoll();
var diceLocationStringArray = [(diceString + dice1Value + pngString),
(diceString + dice2Value + pngString)];




changeDiceImage(diceLocationStringArray[0], diceLocationStringArray[1]);
manipulateHTML(dice1Value, dice2Value);

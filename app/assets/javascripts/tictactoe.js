var turn = 0

let currentGame = 0

const WIN_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

function player() {
  if(turn % 2 === 0)
  return "X"
  else
  return "O"
}

function updateState(td) {
  td.innerHTML = player()
}

function setMessage(str) {
  $("#message").text(str)  
}

function populateBoard(array) {
  if (array.length === 0) {
    resetBoard();
  } else {
    for (var i = 0; i < array.length; i++) {
      $("td")[i].innerHTML = array[i];
    }
    turn = turnCount();
  }
}

function turnCount() {
  counter = 0
  for (var i = 0; i < 9; i++) {
    if ($("td")[i].innerHTML === "X" || $("td")[i].innerHTML === "O") {
      counter++
    }
  }
  return counter
}

function createStateArray() {
  var array = new Array();
  $("table td").each(function(element){
    var el = $(this)
    array.push(el.text())
  })
  return array
}

function previousGames() {
  
}

function saveGame() {
  
}

function getGame() {
  
}

function checkWinner() {
  
}

function playerTokens() {
  
}

function playerWon() {
  
}

function clearBoard() {
  
}

function doTurn() {
  
}

$(document).ready(function() {
  
});

function attachListeners() {
  
}
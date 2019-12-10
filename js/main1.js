$(document).ready(function (){

  let gameBoard = [

    ['boxOne', 'boxTwo', 'boxThree'],
    ['boxFour', 'boxFive', 'boxSix'],
    ['boxSeven', 'boxEight', 'boxNine']

  ];

  let beenPlayed = [

    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]

  // saving the link to each box
  let $boxClick = $('.box');
  let $rowOne = $('.row-1');
  let $rowTwo = $('.row-1');
  let $rowThree = $('.row-1');
  let rowOne = gameBoard[0];
  let rowTwo = gameBoard[1];
  let rowThree = gameBoard[2];

  let turnCounter = true;
  let naughtOrCross = 'X';
  let alreadyClicked = [];

  // changes turn alternating between X and Y
  let changeTurn = function ( count ) {

    if (count === true) {
        turnCounter = false
        naughtOrCross = 'X'

    } else if (count === false) {
        turnCounter = true
        naughtOrCross = 'O'

    }

  };

  let loopAppendHtml = function ( boxClicked ) {
    let toBeAppended = $(`#${boxClicked}`)//`$${boxClicked}`
    for (var i = 0; i < gameBoard.length; i++) {
      for (var j = 0; j < gameBoard[i].length; j++) {
        if (gameBoard[i][j] === boxClicked && beenPlayed[i][j] === '') {
          //console.log(toBeAppended);
          changeTurn(turnCounter);
          toBeAppended.append(naughtOrCross)
          beenPlayed[i][j] = naughtOrCross

        } else {
          //console.log('Choose somewhere else');
        }
      }
    }
  }; // add to box


  let findWinnerLogic = function ( player ) {

    for (var i = 0; i < beenPlayed.length; i++) {
          // row logic
        if (beenPlayed[i][0] === beenPlayed[i][1]
           && beenPlayed[i][2] === beenPlayed[i][1]
           && beenPlayed[i][0] !== '') {
          console.log(`Player: ${player} wins`);
          // colunm logic
        } else if (beenPlayed[0][i] === beenPlayed[1][i]
           && beenPlayed[2][i] === beenPlayed[1][i]
           && beenPlayed[0][i] !== '') {
          console.log(`Player: ${player} wins`);
          // diagonal logic
        } else if (beenPlayed[0][0] === beenPlayed[1][1]
           && beenPlayed[2][2] === beenPlayed[1][1]
           && beenPlayed[0][0] !== '') {
          console.log(`Player: ${player} wins`);
        }  else if (beenPlayed[0][2] === beenPlayed[1][1]
           && beenPlayed[2][0] === beenPlayed[1][1]
           && beenPlayed[0][2] !== '') {
          console.log(`Player: ${player} wins`);
        }

      }}; // find winner logic

  $boxClick.on('click', function ( ev ) {

    // finds the box clicked and returns its id
    let addToBox = ev.target.id;
    // function changing returns

    // adding naught or cross to html depending on turn
    loopAppendHtml(addToBox);
    findWinnerLogic(naughtOrCross);

    // console.log(beenPlayed);
  }); // click on box
}); // jquery document ready

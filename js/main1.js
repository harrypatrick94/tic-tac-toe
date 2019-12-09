


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

  $boxClick.on('click', function ( ev ) {

    // finds the box clicked and returns its id
    let addToBox = ev.target.id;
    // function changing returns

    // adding naught or cross to html depending on turn
    loopAppendHtml(addToBox);

    console.log(beenPlayed);
  }); // click on box
}); // jquery document ready

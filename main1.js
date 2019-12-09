


$(document).ready(function (){


    let gameBoard = [

      ['boxOne', 'boxTwo', 'boxThree'],
      ['boxFour', 'boxFive', 'boxSix'],
      ['boxSeven', 'boxEight', 'boxNine']

    ];



  // saving the link to each box
  let $boxClick = $('.box');
  let $rowOne = $('.row-1');
  let $rowTwo = $('.row-1');
  let $rowThree = $('.row-1');
  let rowOne = gameBoard[0];
  let rowTwo = gameBoard[1];
  let rowThree = gameBoard[2];


  let loopAppendHtml = function ( boxClicked ) {
    let toBeAppended = $(`#${boxClicked}`)//`$${boxClicked}`
    for (var i = 0; i < gameBoard.length; i++) {
      for (var j = 0; j < gameBoard[i].length; j++) {
        if (gameBoard[i][j] === boxClicked) {
          console.log(toBeAppended);
          toBeAppended.append(naughtOrCross)
        } else {
          console.log(toBeAppended);
        }
      }
    }
  }; // add to box

  $boxClick.on('click', function ( ev ) {

    console.log(gameBoard);
    // finds the box clicked and returns its id
    let addToBox = ev.target.id;
    // function changing returns
    changeTurn(turnCounter);
    // adding naught or cross to html depending on turn
    loopAppendHtml(addToBox);

  }); // click on box
}); // jquery document ready

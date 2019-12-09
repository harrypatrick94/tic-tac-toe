


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
  let $boxOne = $('#boxOne');
  let $boxTwo = $('#boxTwo');
  let $boxThree = $('#boxThree');
  let $boxFour = $('#boxFour');
  let $boxFive = $('#boxFIve');
  let $boxSix = $('#boxSix');
  let $boxSeven = $('#boxSeven');
  let $boxEight = $('#boxEight');
  let $boxNine = $('#boxNine');
  let rowOne = gameBoard[0];
  let rowTwo = gameBoard[1];
  let rowThree = gameBoard[2];


  // let ticTacToe = function ( clicked ) {
  //   for (var i = 0; i < gameBoard.length; i++) {
  //     for (var j = 0; j < 3; j++) {
  //       if (clicked === gameBoard[i][j]) {
  //         console.log('success');
  //       }
  //     }
  //   }
  //
  // }

  // find id of clicked box
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
  // matches adds either person turn to box that has been clicked
  // let appendHtml = function ( boxClicked ) {
  //
  //   if (boxClicked === 'boxOne' && rowOne[0] === '') {
  //     $boxOne.append(naughtOrCross)
  //     rowOne[0] = 'boxOne'
  //   } else if (boxClicked === 'box-2' && rowOne[1] === ''){
  //     $boxTwo.append(naughtOrCross)
  //     rowOne[1] = 'box-2'
  //   } else if (boxClicked === 'box-3' && rowOne[2] === ''){
  //     $boxThree.append(naughtOrCross)
  //     rowOne[2] = 'box-3'
  //   } else if (boxClicked === 'box-4' && rowTwo[0] === ''){
  //     $boxFour.append(naughtOrCross)
  //     rowTwo[0] = 'box-4'
  //   } else if (boxClicked === 'box-5' && rowTwo[1] === ''){
  //     $boxFive.append(naughtOrCross)
  //     rowTwo[1]  = 'box-5'
  //   } else if (boxClicked === 'box-6' && rowTwo[2] === ''){
  //     $boxSix.append(naughtOrCross)
  //     rowTwo[2] = 'box-6'
  //   } else if (boxClicked === 'box-7' && rowThree[0] === ''){
  //     $boxSeven.append(naughtOrCross)
  //     rowThree[0] = 'box-7'
  //   } else if (boxClicked === 'box-8' && rowThree[1] === ''){
  //     $boxEight.append(naughtOrCross)
  //     rowThree[1] = 'box-8'
  //   } else if (boxClicked === 'box-9' && rowThree[2] === ''){
  //     $boxNine.append(naughtOrCross)
  //     rowThree[2] = 'box-9'
  //   } else {
  //     console.log('choose another box');
  //   }
  //
  // };

  let loopAppendHtml = function ( boxClicked ) {
    let toBeAppended = $(`#${boxClicked}`)//`$${boxClicked}`
    for (var i = 0; i < gameBoard.length; i++) {
      for (var j = 0; j < gameBoard[i].length; j++) {
        if (gameBoard[i][j] ===  boxClicked) {
          // console.log(toBeAppended);
          toBeAppended.append(naughtOrCross)
        }
      }
    }
  }; // add to box

  $boxClick.on('click', function ( ev ) {

    console.log(gameBoard);
    // finds the box clicked and returns its id
    let addToBox = ev.target.id;
    // return box to be appended

    // adds the box clicked to an array
    // function changing returns
    changeTurn(turnCounter);
    // adding naught or cross to html depending on turn
    loopAppendHtml(addToBox);



  }); // click on box
}); // jquery document ready

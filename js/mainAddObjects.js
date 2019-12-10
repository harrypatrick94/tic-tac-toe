$(document).ready(function (){

  let ticTacToe = {

    gameBoard: [

      ['boxOne', 'boxTwo', 'boxThree'],
      ['boxFour', 'boxFive', 'boxSix'],
      ['boxSeven', 'boxEight', 'boxNine']

    ],

    beenPlayed: [

      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],

    saveVariables: function (){

      $boxClick =  $('.box')
      rowOne = this.gameBoard[0]
      rowTwo = this.gameBoard[1]
      rowThree = this.gameBoard[2]
      $rowOne = $('.row-1')
      $rowTwo = $('.row-2')
      $rowThree = $('.row-3')
      turnCounter = true
      naughtOrCross = 'X'
    },

    // changes turn alternating between X and Y
    changeTurn: function ( count ) {
      // checking to see if count is true or false
      if (count === true) {
          // setting turnCounter to false and ouput to X
            turnCounter = false
            naughtOrCross = 'X'

      } else if (count === false) {
            turnCounter = true
            naughtOrCross = 'O'
          }
    },

    loopAppendHtml: function ( boxClicked ) {
      let toBeAppended = $(`#${boxClicked}`)//`$${boxClicked}`
      for (var i = 0; i < this.gameBoard.length; i++) {
        for (var j = 0; j < this.gameBoard[i].length; j++) {
          if (this.gameBoard[i][j] === boxClicked && this.beenPlayed[i][j] === '') {
            //console.log(toBeAppended);
            this.changeTurn(turnCounter);
            toBeAppended.append(naughtOrCross)
            this.beenPlayed[i][j] = naughtOrCross;
            // this.findWinnerLogic(naughtOrCross);
          } else {
            //console.log('Choose somewhere else');
          }
        }
      }
    }, //

    findWinnerLogic: function ( player ) {
      let checkBoard = this.beenPlayed
      for (var i = 0; i < checkBoard.length; i++) {
            // row logic
          if (checkBoard[i][0] === checkBoard[i][1]
             && checkBoard[i][2] === checkBoard[i][1]
             && checkBoard[i][0] !== '') {
            console.log(`Player: ${player} wins`);
            // colunm logic
          } else if (checkBoard[0][i] === checkBoard[1][i]
             && checkBoard[2][i] === checkBoard[1][i]
             && checkBoard[0][i] !== '') {
            console.log(`Player: ${player} wins`);
            // diagonal logic
          } else if (checkBoard[0][0] === checkBoard[1][1]
             && checkBoard[2][2] === checkBoard[1][1]
             && checkBoard[0][0] !== '') {
            console.log(`Player: ${player} wins`);
          }  else if (checkBoard[0][2] === checkBoard[1][1]
             && checkBoard[2][0] === checkBoard[1][1]
             && checkBoard[0][2] !== '') {
            console.log(`Player: ${player} wins`);
          }

        }
    },

    test: $boxClick.on('click', function ( ev ) {
      let addToBox = ev.target.id;
      console.log(addToBox);

    }),


//


 // find winner logic
//

//
//   // end of Object
//
//
//   boxClick: function () {
//
//   this.$boxClick.on('click', function ( ev ) {
//
//    // finds the box clicked and returns its id
//
//    // function changing returns
//    // adding naught or cross to html depending on turn
//    this.loopAppendHtml(addToBox);
//    // THIS ABOVE REFERS TO CLICK NOT FUNCTION
//  })// click on box


}
  ticTacToe.saveVariables()
  ticTacToe.test()

}); // jquery document ready

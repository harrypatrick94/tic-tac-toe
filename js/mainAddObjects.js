$(document).ready(function (){

  let ticTacToe = {

    gameBoard: [

      ['boxOne', 'boxTwo', 'boxThree'],
      ['boxFour', 'boxFive', 'boxSix'],
      ['boxSeven', 'boxEight', 'boxNine']

    ],



    $boxClick: $('.box'),
    saveVariables: function (){

      $boxClick =  $('.box')
      $flashBox = $('#flash')
      rowOne = this.gameBoard[0]
      rowTwo = this.gameBoard[1]
      rowThree = this.gameBoard[2]
      $rowOne = $('.row-1')
      $rowTwo = $('.row-2')
      $rowThree = $('.row-3')
      turnCounter = true
      naughtOrCross = 'X'



    },

    gameEnd: function(){
        $flashBox.fadeToggle()
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
          if (this.gameBoard[i][j] === boxClicked && this.gameBoard[i][j] !== ('X' || 'O')) {
            //console.log(toBeAppended);
            this.changeTurn(turnCounter);
            toBeAppended.append(naughtOrCross)
            this.gameBoard[i][j] = naughtOrCross;
            // this.findWinnerLogic(naughtOrCross);
          } else {
            //console.log('Choose somewhere else');
          }
        }
      }
    }, //



    findWinnerLogic: function () {
      let checkBoard = this.gameBoard
      for (var i = 0; i < checkBoard.length; i++) {
            // row logic
          if (checkBoard[i][0] === checkBoard[i][1]
             && checkBoard[i][2] === checkBoard[i][1]
             && checkBoard[i][0] !== '') {
            this.gameEnd()
            return true
            // colunm logic
          } else if (checkBoard[0][i] === checkBoard[1][i]
             && checkBoard[2][i] === checkBoard[1][i]
             && checkBoard[0][i] !== '') {
            this.gameEnd()
            return true
            // diagonal logic
          } else if (checkBoard[0][0] === checkBoard[1][1]
             && checkBoard[2][2] === checkBoard[1][1]
             && checkBoard[0][0] !== '') {
            this.gameEnd()
            return true
          }  else if (checkBoard[0][2] === checkBoard[1][1]
             && checkBoard[2][0] === checkBoard[1][1]
             && checkBoard[0][2] !== '') {
            this.gameEnd()
            return true
          }

        }
    },

    addWinnerBox: function (finalMove, winningLogic) {
      if (winningLogic === true){
      $flashBox.text(`Winner is player ${finalMove}`)
      $flashBox.toggle()
    } else {
      console.log(finalMove);
    }
    },

    clickEventBox: function() {this.$boxClick.on('click', function ( ev ) {
      let addToBox = ev.target.id;

      ticTacToe.loopAppendHtml(addToBox);
      ticTacToe.findWinnerLogic()
      let lastMove = naughtOrCross
      ticTacToe.addWinnerBox(lastMove, ticTacToe.findWinnerLogic())


      })
    }, // end of gmae click event



  }
  ticTacToe.saveVariables()
  ticTacToe.clickEventBox()

}); // jquery document ready

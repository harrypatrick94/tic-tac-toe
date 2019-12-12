$(document).ready(function (){

  let ticTacToe = {

    gameBoard: [

      ['', '', ''],
      ['', '', ''],
      ['', '', '']

    ],

    $boxClick: $('.box'),
    $flashBox: $('#flash'),
    $xScore: $('#xScore p'),
    $yScore: $('yScore p'),
    saveVariables: function () {

      $boxClick =  $('.box')
      $flashBox = $('#flash')
      $xScore = $('#xScore p')
      $oScore = $('#oScore p')
      rowOne = this.gameBoard[0]
      rowTwo = this.gameBoard[1]
      rowThree = this.gameBoard[2]
      $rowOne = $('.row-1')
      $rowTwo = $('.row-2')
      $rowThree = $('.row-3')
      turnCounter = true
      naughtOrCross = 'X'
      xCounter = 0
      oCounter = 0
    },

    gameEnd: function(){
        $flashBox.fadeToggle()
    },

    // changes turn alternating between X and Y
    changeTurn: function ( count ) {
      // checking to see if count is true or false
      if( count ){
        // setting turnCounter to false and ouput to X
        turnCounter = false
        naughtOrCross = 'X'
      } else {
        turnCounter = true
        naughtOrCross = 'O'
      }

    },

    loopAppendHtml: function ( boxClicked ) {
      let toBeAppended = $(`#${boxClicked}`)//`$${boxClicked}`
      console.log( toBeAppended );
      const x = toBeAppended.attr('x');
      const y = toBeAppended.attr('y');

      if( toBeAppended.html() !== 'X' &&  toBeAppended.html() !== 'O' ){
        this.changeTurn(turnCounter);
        toBeAppended.append(naughtOrCross)
        this.gameBoard[x][y] = naughtOrCross;
      }
    }, //

    findWinnerLogic: function () {
      let checkBoard = this.gameBoard;
      for (var i = 0; i < checkBoard.length; i++) {
            if(
               (checkBoard[i][0] === checkBoard[i][1] && checkBoard[i][2] === checkBoard[i][1] && checkBoard[i][0] !== '')
            || (checkBoard[0][i] === checkBoard[1][i] && checkBoard[2][i] === checkBoard[1][i] && checkBoard[0][i] !== '')
            || (checkBoard[0][0] === checkBoard[1][1] && checkBoard[2][2] === checkBoard[1][1] && checkBoard[0][0] !== '') || (checkBoard[0][2] === checkBoard[1][1] && checkBoard[2][0] === checkBoard[1][1] && checkBoard[0][2] !== '') ) {
            this.gameEnd()
            return true
          }
        }
      },

    addWinnerBox: function (finalMove, winningLogic) {
      if (winningLogic === true){
      $flashBox.text(`Winner is player ${finalMove}. play again?`)
      $flashBox.toggle()
      ticTacToe.gameBoard =  [

        ['boxOne', 'boxTwo', 'boxThree'],
        ['boxFour', 'boxFive', 'boxSix'],
        ['boxSeven', 'boxEight', 'boxNine']

      ]
      }
    },

    addScore: function ( lastMove) {

      if (lastMove === 'X') {
        xCounter++
        $xScore.text(xCounter)
      } else if (lastMove === 'O') {
        oCounter++
        $oScore.text(oCounter)
      }
    },

    clickEventBox: function() {this.$boxClick.on('click', function ( ev ) {
      let addToBox = ev.target.id;

      ticTacToe.loopAppendHtml(addToBox);
      ticTacToe.findWinnerLogic()
      let lastMove = naughtOrCross
      ticTacToe.addWinnerBox(lastMove, ticTacToe.findWinnerLogic())




      console.log(ticTacToe.gameBoard);


      })
    }, // end of game click event

    reset: $('#flash').on('click', function () {
      console.log('works');
      $boxClick.empty()
      $flashBox.toggle()
      let lastMove = naughtOrCross
      ticTacToe.addScore(lastMove)

      console.log(ticTacToe.gameBoard);

    })

  }
    ticTacToe.saveVariables()
    ticTacToe.clickEventBox()

}); // jquery document ready

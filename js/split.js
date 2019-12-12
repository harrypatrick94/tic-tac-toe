let turn = 1
let gameOver = false
let naughtOrCross = 'X'
let xCounter = 0
let oCounter = 0
let draw = false

let ticTacToe = {

  gameBoard: [

    ['', '', ''],
    ['', '', ''],
    ['', '', '']

  ],
  // adds game winning box
  // finds and appends box with X or Y
  findBox: function ( boxClicked ) {
    const playMove = $(`#${boxClicked}`)
    const x = playMove.attr('x');
    const y = playMove.attr('y');

    if (playMove.html() !== 'X' && playMove.html() !== 'O' && gameOver === false) {
      if (turn % 2 === 0) {

        naughtOrCross = 'X'
        this.gameBoard[x][y] = naughtOrCross
        playMove.append('X')
        turn++
      } else {

        naughtOrCross = 'O'
        this.gameBoard[x][y] = naughtOrCross
        playMove.append('O')
        turn++
      }
    }
  },
  // finds game winner
  findWinnerLogic: function (  ) {
  let checkBoard = this.gameBoard;
  for (var i = 0; i < checkBoard.length; i++) {
        if(
             (checkBoard[i][0] === checkBoard[i][1] && checkBoard[i][2] === checkBoard[i][1] && checkBoard[i][0] !== '')
          || (checkBoard[0][i] === checkBoard[1][i] &&      checkBoard[2][i] === checkBoard[1][i] && checkBoard[0][i] !== '')
          || (checkBoard[0][0] === checkBoard[1][1] && checkBoard[2][2] === checkBoard[1][1] && checkBoard[0][0] !== '')
          || (checkBoard[0][2] === checkBoard[1][1] && checkBoard[2][0] === checkBoard[1][1] && checkBoard[0][2] !== '') ) {
          // this.gameEnd()
          gameOver = true
          $('#flash').text(`Winner is player ${naughtOrCross}. click here to play again?`)
          $('#flash').toggle()
      } else if (turn === 10 ) {
        $('#flash').text(`Game is a draw... click here to play again?`)
        $('#flash').toggle()
        gameOver = true
        draw = true
      }
    }
  },
  // resets game
  reset: function (end) {

    if (end) {
      this.gameBoard = [
        ['', '', ''],['', '', ''],['', '', '']
      ]
      draw = false
      gameOver = false
      turn = 1
      $('.box').empty()
      $('#flash').toggle()
    }
  },
  //  scores game
  addScore: function ( lastMove) {

    if (lastMove === 'X' && draw === false ) {
      xCounter++
      $('#xScore p').text(xCounter)
    } else if (lastMove === 'O' && draw === false) {
      oCounter++
      $('#oScore p').text(oCounter)
    } else {
    }
  },
  // run all game functions
  play: function ( boxClicked) {

    this.findBox( boxClicked );
    this.findWinnerLogic();



  }
}

$(document).ready(function (  ){

  // event handler play naughts and crosses
  $('.box').on('click', function ( ev ) {

    let clickPosition = ev.target.id
    ticTacToe.play(clickPosition)

  });

  $('#flash').on('click', function (){


    ticTacToe.addScore(naughtOrCross)
    ticTacToe.reset( gameOver )

  })

  $('.screenChange').on('click', function (){
    // $('div.gridPredrawn').toggleClass('.grid-1')
    $('#game').toggleClass('gridPredrawn').toggleClass('grid-1');
  })
})

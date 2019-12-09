


$(document).ready(function (){

  // saving the link to each box
  let $boxClick = $('.box');
  let $rowOne = $('.row-1');
  let $rowTwo = $('.row-1');
  let $rowThree = $('.row-1');
  let $boxOne = $('#box-1');
  let $boxTwo = $('#box-2');
  let $boxThree = $('#box-3');
  let $boxFour = $('#box-4');
  let $boxFive = $('#box-5');
  let $boxSix = $('#box-6');
  let $boxSeven = $('#box-7');
  let $boxEight = $('#box-8');
  let $boxNine = $('#box-9');


  // find id of clicked box
  turnCounter = true;
  let naughtOrCross = 'X'


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
  let appendHtml = function ( boxClicked ) {

    if (boxClicked === 'box-1') {
      $boxOne.append(naughtOrCross)
    } else if (boxClicked === 'box-2'){
      $boxTwo.append(naughtOrCross)
    } else if (boxClicked === 'box-2'){
      $boxTwo.append(naughtOrCross)
    } else if (boxClicked === 'box-3'){
      $boxThree.append(naughtOrCross)
    } else if (boxClicked === 'box-4'){
      $boxFour.append(naughtOrCross)
    } else if (boxClicked === 'box-5'){
      $boxFive.append(naughtOrCross)
    } else if (boxClicked === 'box-6'){
      $boxSix.append(naughtOrCross)
    } else if (boxClicked === 'box-7'){
      $boxSeven.append(naughtOrCross)
    } else if (boxClicked === 'box-8'){
      $boxEight.append(naughtOrCross)
    } else if (boxClicked === 'box-9'){
      $boxNine.append(naughtOrCross)
    } else {
      console.log('choose a box');
    }

  }

  $boxClick.on('click', function ( ev ) {

    // finds the box clicked and returns its id
    let addToBox = ev.target.id
    // function changing returns
    changeTurn(turnCounter)
    // adding naught or cross to html depending on turn
    appendHtml(addToBox)

  }); // click on box

}); // jquery document ready

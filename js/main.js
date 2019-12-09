


$(document).ready(function (){

  // saving the link to each box
  let $boxClick = $('.box');
  let $rowOne = $('.row')[0];
  let $rowTwo = $('.row')[1];
  let $rowThree = $('.row')[2];
  let $boxOne = $('#box-1');
  let $boxTwo = $('#box-2');
  let $boxThree = $('#box-3');
  let $boxFour = $('#box-4');
  let $boxFive = $('#box-5');
  let $boxSix = $('#box-6');
  let $boxSeven = $('#box-7');
  let $boxEight = $('#box-8');
  let $boxNine = $('#box-9');


  }; // find id of clicked box
  turnCounter = true;
  let naughtOrCross = 'X'

  // changes turn alternating between X and Y
  let changeTurn = function ( count ) {

    if (count === true) {
        turnCounter = false
        naughtOrCross = 'X'

    } else if (count === false) {
        turnCounter = true
        naughtOrCross = 'Y'

    }

  };





  $boxClick.on('click', function ( ev ) {

    let addToBox = ev.target.id
    console.log(addToBox);


    changeTurn(turnCounter)

     if (addToBox === 'box-1') {
       $boxOne.append(naughtOrCross)
     } else if (addToBox === 'box-2'){
       $boxTwo.append(naughtOrCross)
     } else if (addToBox === 'box-2'){
       $boxTwo.append(naughtOrCross)
     } else if (addToBox === 'box-3'){
       $boxThree.append(naughtOrCross)
     } else if (addToBox === 'box-4'){
       $boxFour.append(naughtOrCross)
     } else if (addToBox === 'box-5'){
       $boxFive.append(naughtOrCross)
     } else if (addToBox === 'box-6'){
       $boxSix.append(naughtOrCross)
     } else if (addToBox === 'box-7'){
       $boxSeven.append(naughtOrCross)
     } else if (addToBox === 'box-8'){
       $boxEight.append(naughtOrCross)
     } else if (addToBox === 'box-9'){
       $boxNine.append(naughtOrCross)
     } else {
       console.log('choose a box');
     }








  }); // click on box

}); // jquery document ready

// add to html
// $('body').append($wordDiv);

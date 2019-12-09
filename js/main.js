


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

  let findTheId = function (  ) {
    if ($boxClick[0] === $boxOne) {
    console.log(`You clicked ${$boxOne}`)
  } else {
    console.log('wrong click');
  }
  }; // find id of clicked box

  $boxClick.on('click', function ( ev ) {


    let addToBox = ev.target.id

     if (addToBox === 'box-1') {
       $boxOne.append('X')
     } else {
       console.log('fuck off');
     }








  }); // click on box

}); // jquery document ready

// add to html
// $('body').append($wordDiv);

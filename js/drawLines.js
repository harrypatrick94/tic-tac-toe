let lastX = 0; // keep track of last mouse X position

const createBlob = function (x, y) {

  // create div inside body
  const $blob = $('<div class="blob">')


  const color = `rgb( 255, 255, 255)`

  lastX = x;


  $blob.css({
  top: y + 'px', //is needed at the end for css position   value
  left: x + 'px',
  color: color,
  width: 15 + 'px',
  height: 15 + 'px',

  });

  $('body').append($blob); // attach to the DOM

}

$(document).ready(function () {

  $(document).on('mousemove', function( event ){

    // only draw (run function) if shift key is held down
    if (event.shiftKey) {
      createBlob(event.clientX, event.clientY)
    }

  }); // click event

  $(document).on('keypress', function (event){

    if (event.key === ' ')

    $('div.blob').remove()

  }); // on `spacekey` remove divs thus clear screen

}); //document ready

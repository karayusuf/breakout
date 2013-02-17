var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.keyboard = function() {
  var keycodes = {
    37 : 'Left'
  , 39 : 'Right'
  }

  function movePaddle(event) {
    var direction = keycodes[event.keyCode];

    if ( direction !== undefined ) {
      Breakout.paddle()['move' + direction]();
    }
  }

  function stopPaddle(event) {
    var direction = keycodes[event.keyCode];

    if ( direction !== undefined ) {
      Breakout.paddle()['stopMoving' + direction]();
    }
  }

  document.onkeydown = movePaddle
  document.onkeyup = stopPaddle
}();

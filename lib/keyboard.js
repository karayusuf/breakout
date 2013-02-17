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
      paddle = Breakout.elements.paddle;
      Breakout.paddle()['move' + direction]();
    }
  }

  function stopPaddle() {
    Breakout.paddle().stopMoving();
  }

  document.onkeydown = movePaddle
  document.onkeyup = stopPaddle
}();

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

  document.onkeydown = movePaddle
}();

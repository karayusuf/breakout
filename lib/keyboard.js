var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.keyboard = function() {
  var keyDownActions = {
    37 : function() { Breakout.paddle().moveLeft() }
  , 38 : function() { Breakout.ball().launch() }
  , 39 : function() { Breakout.paddle().moveRight() }
  }

  var keyUpActions = {
    37 : function() { Breakout.paddle().stopMovingLeft() }
  , 39 : function() { Breakout.paddle().stopMovingRight() }
  }

  function performKeyDown(event) {
    var action = keyDownActions[event.keyCode];
    if ( action !== undefined ) {
      action();
    }
  }

  function performKeyUp(event) {
    var action = keyUpActions[event.keyCode];
    if ( action !== undefined ) {
      action();
    }
  }


  document.onkeydown = performKeyDown;
  document.onkeyup = performKeyUp;
}();

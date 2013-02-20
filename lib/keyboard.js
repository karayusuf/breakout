var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.keyboard = function() {
  var keyDownActions = {
    37 : function() { Breakout.paddle.moveLeft() }
  , 39 : function() { Breakout.paddle.moveRight() }
  }

  var keyUpActions = {
    37 : function() { Breakout.paddle.stopMovingLeft() }
  , 39 : function() { Breakout.paddle.stopMovingRight() }
  }

  function perform(action) {
    if ( typeof(action) === "function" ) {
      action();
    }
  }

  function performKeyDown(event) {
    var action = keyDownActions[event.keyCode];
    perform( action );
  }

  function performKeyUp(event) {
    var action = keyUpActions[event.keyCode];
    perform( action );
  }

  document.onkeydown = performKeyDown;
  document.onkeyup = performKeyUp;
}();

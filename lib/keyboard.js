var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.keyboard = function() {
  var keyDownActions = {
    37 : function() { eve('breakout.paddle.move.left') }
  , 39 : function() { eve('breakout.paddle.move.right') }
  }

  var keyUpActions = {
    37 : function() { eve('breakout.paddle.stop.left') }
  , 39 : function() { eve('breakout.paddle.stop.right') }
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

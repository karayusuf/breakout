var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.paddle = function() {
  var name    = "paddle"
    , element = Breakout.elements[name]
    , screen  = Breakout.elements.screen
    , animate = Breakout.animate( element );

  return {
    'moveLeft' : function() {
      return animate.moveToLeftEdge();
    }
  , 'moveRight' : function() {
      return animate.moveToRightEdge();
    }
  , 'isMovingLeft' : function() {
      return animate.isMovingLeft();
    }
  , 'isMovingRight' : function() {
      return animate.isMovingRight();
    }
  , 'stopMovingLeft' : function() {
      return animate.stopMovingLeft();
    }
  , 'stopMovingRight' : function() {
      return animate.stopMovingRight();
    }
  , 'draw' : function() {
      var screen = Breakout.elements.screen
        , paddle = Breakout.screen().add( name, {
        'type'   : 'rect'
      , 'x'      : 0
      , 'y'      : 380
      , 'width'  : 50
      , 'height' : 10
      , 'fill'   : '#333'
      });

      middleOfScreen = (screen.width - paddle.attr('width')) / 2
      paddle.animate({ 'transform' : 't' + middleOfScreen + ',0'}, 0)
    }
  }
}

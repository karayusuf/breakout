var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.paddle = function() {
  var name    = "paddle"
    , paddle  = Breakout.elements[name]
    , ball    = Breakout.elements.ball
    , screen  = Breakout.elements.screen
    , animate = Breakout.animate( paddle );

  var set = screen.set();
  set.push( paddle );
  set.push( ball );

  animate = Breakout.animate( set );

  function isMoving( direction ) {
    return paddle.data('moving') === direction;
  }

  function stopMoving( direction ) {
    if ( isMoving(direction) ) {
      paddle.removeData('moving');
      set.stop();
    }
  }

  return {
    'moveLeft' : function() {
      if ( !isMoving('Left') ) {
        paddle.data('moving', 'Left');
        return animate.moveToLeftEdge();
      }
    }
  , 'moveRight' : function() {
      if ( !isMoving('Right') ) {
        paddle.data('moving', 'Right');
        return animate.moveToRightEdge();
      }
    }
  , 'isMovingLeft' : function() {
      return isMoving( 'Left' );
    }
  , 'isMovingRight' : function() {
      return isMoving( 'Right' );
    }
  , 'stopMovingLeft' : function() {
      return stopMoving( 'Left' );
    }
  , 'stopMovingRight' : function() {
      return stopMoving( 'Right' );
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

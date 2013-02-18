var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.animate = function( element ) {
  var screen = Breakout.elements.screen;

  function timeToEdge( x ) {
    var time;

    if ( x === 0 ) {
      time = element.getBBox().x;
    } else {
      time = screen.width - element.getBBox().x2;
    }

    time = time / screen.width;
    time = time * 2000;
    time = Math.ceil( time );

    return time;
  }

  function moveTo( x, direction ) {
    if ( element.data('moving') !== direction ) {
      var ms = timeToEdge( x );

      element.stop();
      element.data('moving', direction);
      element.animate({ 'transform' : 't' + x + ',0'}, ms);
    }
  }

  function isMoving( direction ) {
    return element.data('moving') === direction;
  }

  function stopMoving( direction ) {
    if ( isMoving(direction) ) {
      element.removeData('moving');
      element.stop();
    }
  }

  return {
    'moveToLeftEdge' : function() {
      moveTo( 0, 'Left' );
      return element;
    }
  , 'moveToRightEdge' : function() {
      var x = screen.width - element.attr('width');
      moveTo( x, 'Right');
      return element;
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
  }

}

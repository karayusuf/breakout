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

  function moveToX( x ) {
    var ms = timeToEdge( x );

    element.stop();
    element.animate({
      'transform' : 't' + x + ',0'}, ms);
  }

  return {
    'moveToLeftEdge' : function() {
      moveToX( 0 );
      return element;
    }
  , 'moveToRightEdge' : function() {
      var x = screen.width - element.getBBox().width;
      moveToX( x );
      return element;
    }
  }

}

var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.paddle = function() {
  var name    = "paddle"
    , element = Breakout.elements[name]
    , screen  = Breakout.elements.screen;

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

  function moveTo( x ) {
    if ( element.data('inMotion') === undefined ) {
      element.data('inMotion', true);
      var attributes = element.attr();
      var ms = timeToEdge( x );
      attributes["x"] = x;
      element.animate(attributes, ms);
    }
  }

  return {
    'moveLeft' : function() {
      moveTo( 0 );
    }
  , 'moveRight' : function() {
      var x = screen.width - element.attr('width');
      moveTo( x );
    }
  , 'stopMoving' : function() {
      element.stop();
      element.removeData('inMotion');
    }
  , 'draw' : function() {
      Breakout.screen().add( name, {
        'type'   : 'rect'
      , 'x'      : 100
      , 'y'      : 380
      , 'width'  : 50
      , 'height' : 10
      , 'fill'   : '#333'
      });
    }
  }
}

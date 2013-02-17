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

  function moveTo( x, direction ) {
    if ( element.data('moving') !== direction ) {
      var ms = timeToEdge( x );
      var attributes = element.attr();

      attributes["x"] = x;

      element.stop();
      element.data('moving', direction);
      element.animate(attributes, ms);
    }
  }

  return {
    'moveLeft' : function() {
      moveTo( 0, 'Left' );
    }
  , 'moveRight' : function() {
      var x = screen.width - element.attr('width');
      moveTo( x, 'Right' );
    }
  , 'isMovingLeft' : function() {
      return element.data('moving') === 'Left';
    }
  , 'isMovingRight' : function() {
      return element.data('moving') === 'Right';
    }
  , 'stopMovingLeft' : function() {
      if ( this.isMovingLeft() ) {
        element.removeData('moving');
        return element.stop();
      }
    }
  , 'stopMovingRight' : function() {
      if ( this.isMovingRight() ) {
        element.removeData('moving');
        return element.stop();
      }
    }
  , 'draw' : function() {
      Breakout.screen().add( name, {
        'type'   : 'rect'
      , 'x'      : (screen.width - 50) / 2
      , 'y'      : 380
      , 'width'  : 50
      , 'height' : 10
      , 'fill'   : '#333'
      });
    }
  }
}

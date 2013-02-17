var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.paddle = function() {
  var name    = "paddle"
    , element = Breakout.elements[name]
    , screen  = Breakout.elements.screen;

  function moveTo( x, ms ) {
    if ( element.data('inMotion') === undefined ) {
      element.data('inMotion', true);
      var attributes = element.attr();
      attributes["x"] = x;
      element.animate(attributes, ms);
    }
  }

  return {
    'moveLeft' : function() {
      var time = element.getBBox().x;
      time = time / screen.width;
      time = time * 2000;
      time = Math.ceil( time );

      moveTo( 0, time );
    }
  , 'moveRight' : function() {
      var x = screen.width - element.attr('width');
      var time = screen.width - element.getBBox().x2;
      time = time / screen.width;
      time = time * 2000;
      time = Math.ceil( time );

      moveTo( x, time );
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

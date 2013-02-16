var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.paddle = function() {
  var name    = "paddle"
    , element = Breakout.elements[name];

  return {
    'moveLeft' : function() {
      var moveTo = element.attr();
      moveTo["x"] = element.attr('x') - 20;
      element.animate(moveTo, 100);
    }
  , 'moveRight' : function() {
      var moveTo = element.attr();
      moveTo["x"] = element.attr('x') + 20;
      element.animate(moveTo, 100);
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

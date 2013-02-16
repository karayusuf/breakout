var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.paddle = function() {
  var element;

  return {
    'draw' : function() {
      element = Breakout.screen.add([{
        'type'   : 'rect'
      , 'x'      : 100
      , 'y'      : 380
      , 'width'  : 50
      , 'height' : 10
      , 'fill'   : '#333'
      }]);

      return element;
    }
  }
}

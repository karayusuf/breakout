var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.ball = function() {
  var name = 'ball'
    , element = Breakout.elements[name]
    , screen = Breakout.elements.screen;

  return {
    'draw' : function() {
      Breakout.screen().add( name, {
        'type' : 'circle'
      , 'cx'   : (screen.width) / 2
      , 'cy'   : 374
      , 'r'    : 6
      , 'fill' : '#fff'
      });
    }
  }
}

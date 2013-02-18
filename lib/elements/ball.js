var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.ball = function() {
  var name = 'ball'
    , element = Breakout.elements[name]
    , screen = Breakout.elements.screen;

  return {
    'isAttachedToPaddle' : function() {
      return element.data('attachedToPaddle') === true
    }
  , 'draw' : function() {
      var ball = Breakout.screen().add( name, {
        'type' : 'circle'
      , 'cx'   : 0
      , 'cy'   : 374
      , 'r'    : 6
      , 'fill' : '#fff'
      });

      ball.animate({ 'transform' : 't' + (screen.width / 2) + ',0' }, 0);
      ball.data('attachedToPaddle', true);
      return ball;
    }
  }
}

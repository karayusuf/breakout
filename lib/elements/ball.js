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
  , 'launch' : function() {
      if ( this.isAttachedToPaddle() ) {
        console.log("Launch the Ball!!!");
        element.data('attachedToPaddle', false)
      }
    }
  , 'draw' : function() {
      var ball = Breakout.screen().add( name, {
        'type' : 'circle'
      , 'cx'   : 25
      , 'cy'   : 374
      , 'r'    : 6
      , 'fill' : '#fff'
      });

      paddle = Breakout.elements.paddle;
      startingX = (screen.width / 2) - (paddle.attr('width') / 2);
      ball.animate({ 'transform' : 't' + startingX + ',0' }, 0);
      ball.data('attachedToPaddle', true);
      return ball;
    }
  }
}

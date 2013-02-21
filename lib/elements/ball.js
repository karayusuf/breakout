Raphael.fn.ball = function(x, y, radius) {
  var paper = this
    , middleOfScreen = ((paper.width - radius) / 2)
    , ball = paper.circle(25, y, radius);

  ball.attr('fill', '#333');
  ball.data('isAttachedToPaddle', true)
  ball.transform('t' + (middleOfScreen - 22) + ',0');

  ball.isAttachedToPaddle = function() {
    return (ball.data('isAttachedToPaddle') === true);
  }

  ball.launch = function() {
    ball.data('isAttachedToPaddle', false);
    ball.stop();
  }

  eve.once('breakout.ball.launch', ball.launch)

  return ball;
}

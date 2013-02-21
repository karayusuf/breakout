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

  return ball;
}

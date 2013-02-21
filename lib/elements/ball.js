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
    var currentX = ball.getBBox().x
      , currentY = ball.getBBox().y;

    ball.stop();
    ball.data('isAttachedToPaddle', false);
    ball.attr({ 'cx' : 0 , 'cy' : 0 });
    ball.transform('t' + currentX + ',' + currentY);
    ball.animate({ 'transform' : 't0,0' }, 2000)
  }

  eve.once('breakout.ball.launch', ball.launch)

  return ball;
}

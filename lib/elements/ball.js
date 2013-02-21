Raphael.fn.ball = function(x, y, radius) {
  var paper = this
    , middleOfScreen = ((paper.width - radius) / 2)
    , ball = paper.circle(25, y, radius);

  ball.attr('fill', '#333');
  ball.data('isAttachedToPaddle', true)
  ball.data('mx', -1);
  ball.data('my', -3);
  ball.transform('t' + (middleOfScreen - 22) + ',0');

  function detectCollision() {
    ball.animate( animation() );
  }

  function topEdge( y ) {
    return (y <= ball.attr('r'))
  }

  function leftEdge( x ) {
    return (x <= ball.attr('r'))
  }

  function bottomEdge( y ) {
    return (y >= (paper.height - ball.attr('r')))
  }

  function rightEdge( x ) {
    return (x >= (paper.width - ball.attr('r')))
  }

  function hitPaddle( x, y ) {
    var radius = ball.attr('r')
      , x = x + radius
      , y = y + radius
      , bbox = Breakout.paddle.getBBox();

    return Raphael.isPointInsideBBox( bbox, x, y );
  }

  function animation() {
    var r  = ball.attr('r')
      , cx = ball.attr('cx')
      , cy = ball.attr('cy')
      , mx = ball.data('mx')
      , my = ball.data('my')
      , cx2 = cx + mx
      , cy2 = cy + my;

    if ( topEdge(cy2) ) {
      cy2 = r;
      my = -my;
      ball.data('my', my);
    }

    if ( leftEdge(cx2) ) {
      cx2 = r;
      mx = -mx;
      ball.data('mx', mx);
    }

    if ( hitPaddle(cx2, cy2) ) {
      my = -my;
      ball.data('my', my);
    }

    if ( bottomEdge(cy2) ) {
      cy2 = paper.height - r;
      my = -my
      ball.data('my', my);
    }

    if ( rightEdge(cx2) ) {
      cx2 = paper.width - r;
      mx = -mx;
      ball.data('mx', mx);
    }

    return Raphael.animation({
      'cx' : cx2
    , 'cy' : cy2
    }, 10, 'linear', detectCollision);
  }

  ball.isAttachedToPaddle = function() {
    return (ball.data('isAttachedToPaddle') === true);
  }

  ball.launch = function() {
    var bbox = ball.getBBox();

    ball.stop();
    ball.data('isAttachedToPaddle', false);
    ball.transform("");
    ball.attr({
      'cx' : bbox.x
    , 'cy' : bbox.y
    });

    ball.animate( animation() );
  }

  eve.once('breakout.ball.launch', ball.launch)

  return ball;
}

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
    var cx = ball.attr('cx')
      , cy = ball.attr('cy')
      , collision;

    if ( ball.isMovingUp() ) {
      cy = cy + 1;
    } else {
      cy = cy + 15;
    }

    collision = paper.getElementByPoint( cx, cy );
    if ( collision !== null ) {
      if ( ball.collidesOnY( collision ) ) {
        ball.reverseY();
      }
    }

    ball.animate( animation() );
  }

  function animation() {
    var cx = ball.attr('cx')
      , cy = ball.attr('cy')
      , mx = ball.data('mx')
      , my = ball.data('my')
      , cx2 = cx + mx
      , cy2 = cy + my;

    return Raphael.animation({
      'cx' : cx2
    , 'cy' : cy2
    }, 10, 'linear', detectCollision);
  }

  ball.isMovingUp = function() {
    return (ball.data('my') < 0);
  }

  ball.isMovingDown = function() {
    return (ball.data('my') > 0);
  }

  ball.isMovingLeft = function() {
    return (ball.data('mx') > 0);
  }

  ball.reverseY = function() {
    var my = ball.data('my');
    return ball.data('my', -my);
  }

  ball.reverseX = function() {
    var mx = ball.data('mx');
    return ball.data('mx', -mx);
  }

  ball.collidesOnY = function( element ) {
    var bbox = element.getBBox();

    if ( ball.isMovingUp() ) {
      return ball.isBelow( bbox );
    } else {
      return ball.isAbove( bbox );
    }
  }

  ball.isBelow = function( bbox ) {
    var ballBox = ball.getBBox();
    return (ballBox.y2 > bbox.y2)
  }

  ball.isAbove = function( bbox ) {
    var ballBox = ball.getBBox();
    return (ballBox.y < bbox.y)
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

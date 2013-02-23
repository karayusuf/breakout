Raphael.fn.ball = function(x, y, radius) {
  var paper = this
    , middleOfScreen = ((paper.width - radius) / 2)
    , ball = paper.circle(25, y, radius);

  function detectCollision() {
    var cx = ball.attr('cx')
      , cy = ball.attr('cy')
      , collision;

    if ( ball.isMovingUp() ) {
      cy = cy + 1;
    } else {
      cy = cy + 15;
    }

    if ( ball.isMovingLeft() ) {
      cx = cx + 1;
    } else {
      cx = cx + 15;
    }

    collision = paper.getElementByPoint( cx, cy );
    if ( collision !== null ) {
      collision.hit();
      if ( ball.collidesOnY( collision ) ) { ball.reverseY(); }
      if ( ball.collidesOnX( collision ) ) { ball.reverseX(); }
    }

    ball.animate( animation() );
  }

  function animation() {
    var cx = ball.attr('cx')
      , cy = ball.attr('cy')
      , mx = ball.data('mx')
      , my = ball.data('my');

    if ( ball.isAttachedToPaddle() ) {
      return false;
    } else {
      return Raphael.animation({
        'cx' : cx + mx
      , 'cy' : cy + my
      }, 10, 'linear', detectCollision);
    }
  }

  ball.isMovingUp = function() {
    return (ball.data('my') < 0);
  }

  ball.isMovingLeft = function() {
    return (ball.data('mx') < 0);
  }

  ball.reverseY = function() {
    var my = ball.data('my');
    return ball.data('my', -my);
  }

  ball.reverseX = function() {
    var mx = ball.data('mx');
    return ball.data('mx', -mx);
  }

  ball.collidesOnX = function( element ) {
    var bbox = element.getBBox();

    if ( ball.isMovingLeft() ) {
      return ball.isRightOf( bbox );
    } else {
      return ball.isLeftOf( bbox );
    }
  }

  ball.collidesOnY = function( element ) {
    var bbox = element.getBBox();

    if ( ball.isMovingUp() ) {
      return ball.isBelow( bbox );
    } else {
      return ball.isAbove( bbox );
    }
  }

  ball.isLeftOf = function( bbox ) {
    var ballBox = ball.getBBox();
    return (ballBox.x < bbox.x)
  }

  ball.isRightOf = function( bbox ) {
    var ballBox = ball.getBBox();
    return (ballBox.x2 > bbox.x2)
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

  ball.attachToPaddle = function() {
    var bbox = Breakout.paddle.getBBox();
    var middleOfPaddle = bbox.x + (bbox.width / 2);

    ball.attr('cx', 25);
    ball.attr('cy', y);
    ball.attr('fill', '#333');
    ball.data('isAttachedToPaddle', true)
    ball.data('mx', 1);
    ball.data('my', -3);
    ball.transform('t' + (middleOfPaddle - 25) + ',0');

    eve.once('breakout.ball.launch', ball.launch);
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

  eve.once('breakout.ball.launch', ball.launch);
  eve.on('breakout.lose.life', ball.attachToPaddle);

  return ball;
}

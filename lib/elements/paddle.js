Raphael.fn.paddle = function(y, width, height) {
  var paper = this
    , paddle = paper.rect(0, y, width, height)
    , middleOfScreen = ((paper.width - width) / 2);

  paddle.attr( 'fill' , '#333' );
  paddle.transform('t' + middleOfScreen + ',0');

  /**
   * Calculate the time it should take the
   * paddle to reach the specified x coordinate
   *
   * @private
   * @method timeToX
   * @return {Integer} milliseconds
   */
  function timeToX( x ) {
    var time;

    if ( x === 0 ) {
      time = paddle.getBBox().x;
    } else {
      time = paper.width - paddle.getBBox().x2;
    }

    time = time / paper.width;
    time = time * 2000;
    time = Math.ceil( time );

    return time;
  }

  /**
   * Move the paddle to the specified x coordinate
   *
   * @private
   * @method moveToX
   * @return {Object} paddle
   */
  function moveToX( x, element ) {
    var ms = timeToX( x );

    element.stop();
    element.animate({ 'transform' : 't' + x + ',0'}, ms);
    return paddle;
  }

  function elementsToMove() {
    var ball = Breakout.ball
      , set = paper.set();

    set.push( paddle );

    if ( ball.isAttachedToPaddle() ) {
      set.push( Breakout.ball );
    }

    return set;
  }

  function isMoving( direction ) {
    return (paddle.data('moving') === direction);
  }

  paddle.isMovingLeft = function() {
    return isMoving( 'Left' );
  }

  paddle.isMovingRight = function() {
    return isMoving( 'Right' );
  }

  /**
   * Move the paddle to the left edge of the screen
   *
   * @method moveLeft
   * @return {Object} paddle
   */
  paddle.moveLeft = function() {
    paddle.data('moving', 'Left')
    eve.off('breakout.paddle.move.left', paddle.moveLeft);
    return moveToX( 0, elementsToMove() );
  }

  /**
   * Move the paddle to the right edge of the screen
   *
   * @method moveRight
   * @return {Object} paddle
   */
  paddle.moveRight = function() {
    paddle.data('moving', 'Right');
    eve.off('breakout.paddle.move.right', paddle.moveRight);
    return moveToX( 550, elementsToMove() );
  }

  /**
   * Stop the paddle if it is moving left
   *
   * @method stopMovingLeft
   * @return {Object} paddle
   */
  paddle.stopMovingLeft = function() {
    eve.on('breakout.paddle.move.left', paddle.moveLeft);

    if ( isMoving('Left') ) {
      paddle.removeData('moving');
      return elementsToMove().stop();
    }
  }

  /**
   * Stop the paddle if it is moving right
   *
   * @method stopMovingLeft
   * @return {Object} paddle
   */
  paddle.stopMovingRight = function() {
    eve.on('breakout.paddle.move.right', paddle.moveRight);

    if ( isMoving('Right') ) {
      paddle.removeData('moving');
      return elementsToMove().stop();
    }
  }

  eve.on('breakout.paddle.move.left', paddle.moveLeft);
  eve.on('breakout.paddle.move.right', paddle.moveRight);

  eve.on('breakout.paddle.stop.left', paddle.stopMovingLeft);
  eve.on('breakout.paddle.stop.right', paddle.stopMovingRight);

  return paddle;
}

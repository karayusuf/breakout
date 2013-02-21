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
  function moveToX( x ) {
    var ms = timeToX( x );

    paddle.stop();
    paddle.animate({ 'transform' : 't' + x + ',0'}, ms);
    return paddle;
  }

  /**
   * Move the paddle to the left edge of the screen
   *
   * @method moveLeft
   * @return {Object} paddle
   */
  paddle.moveLeft = function() {
    eve.off('breakout.paddle.move.left', paddle.moveLeft);
    return moveToX( 0 );
  }

  /**
   * Move the paddle to the right edge of the screen
   *
   * @method moveRight
   * @return {Object} paddle
   */
  paddle.moveRight = function() {
    eve.off('breakout.paddle.move.right', paddle.moveRight);
    return moveToX( 550 );
  }

  /**
   * Stop the paddle if it is moving left
   *
   * @method stopMovingLeft
   * @return {Object} paddle
   */
  paddle.stopMovingLeft = function() {
    eve.on('breakout.paddle.move.left', paddle.moveLeft);
    return paddle.stop();
  }

  /**
   * Stop the paddle if it is moving right
   *
   * @method stopMovingLeft
   * @return {Object} paddle
   */
  paddle.stopMovingRight = function() {
    eve.on('breakout.paddle.move.right', paddle.moveRight);
    return paddle.stop();
  }

  eve.on('breakout.paddle.move.left', paddle.moveLeft);
  eve.on('breakout.paddle.move.right', paddle.moveRight);

  eve.on('breakout.paddle.stop.left', paddle.stopMovingLeft);
  eve.on('breakout.paddle.stop.right', paddle.stopMovingRight);

  return paddle;
}

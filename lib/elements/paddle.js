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
   * Determine whether or not the paddle is moving
   * in the specified direction.
   *
   * @private
   * @method isMoving
   * @param {String} direction 'Left' or 'Right'
   * @return {Boolean}
   */
  function isMoving( direction ) {
    return paddle.data('moving') === direction;
  }

  /**
   * Stop the paddle if it is moving in the specified direction
   *
   * @private
   * @method stopMoving
   * @param {String} direction 'Left' or 'Right'
   * @return {Object} paddle
   */
  function stopMoving( direction ) {
    if ( isMoving(direction) ) {
      paddle.removeData('moving');
      paddle.stop();
    }

    return paddle;
  }

  /**
   * Move the paddle to the left edge of the screen
   *
   * @method moveLeft
   * @return {Object} paddle
   */
  paddle.moveLeft = function() {
    paddle.data('moving', 'Left');
    return moveToX( 0 );
  }

  /**
   * Move the paddle to the right edge of the screen
   *
   * @method moveRight
   * @return {Object} paddle
   */
  paddle.moveRight = function() {
    paddle.data('moving', 'Right');
    return moveToX( 550 );
  }

  /**
   * Determine whether or not the paddle is moving left
   *
   * @method isMovingLeft
   * @return {Boolean}
   */
  paddle.isMovingLeft = function() {
    return isMoving( 'Left' );
  }

  /**
   * Determine whether or not the paddle is moving right
   *
   * @method isMovingRight
   * @return {Boolean}
   */
  paddle.isMovingRight = function() {
    return isMoving( 'Right' );
  }

  /**
   * Stop the paddle if it is moving left
   *
   * @method stopMovingLeft
   * @return {Object} paddle
   */
  paddle.stopMovingLeft = function() {
    return stopMoving( 'Left' );
  }

  /**
   * Stop the paddle if it is moving right
   *
   * @method stopMovingLeft
   * @return {Object} paddle
   */
  paddle.stopMovingRight = function() {
    return stopMoving( 'Right' );
  }

  return paddle;
}

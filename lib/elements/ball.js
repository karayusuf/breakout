Raphael.fn.ball = function(x, y, radius) {
  var paper = this
    , middleOfScreen = ((paper.width - radius) / 2)
    , ball = paper.circle(middleOfScreen, y, radius);

  return ball;
}

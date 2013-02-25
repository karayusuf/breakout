var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.brick = function(paper, x, y, color, points) {
  var brick = paper.rect(x, y, 50, 10).attr('fill', color);

  brick.hit = function() {
    brick.remove();
  }

  return brick;
}

Breakout.redBrick = function(paper, x, y) {
  return this.brick(paper, x, y, 'red', 7);
}

Breakout.orangeBrick = function(paper, x, y) {
  return this.brick(paper, x, y, 'orange', 5);
}

Breakout.greenBrick = function(paper, x, y) {
  return this.brick(paper, x, y, 'green', 3);
}

Breakout.yellowBrick = function(paper, x, y) {
  return this.brick(paper, x, y, 'yellow', 1);
}

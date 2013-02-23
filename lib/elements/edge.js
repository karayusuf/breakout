Raphael.fn.bottomEdge = function() {
  var edge = this.rect(0, 397, 600, 10);
  edge.attr('fill', '#000');

  edge.hit = function() {
    eve('breakout.lose.life');
  }

  return edge;
}

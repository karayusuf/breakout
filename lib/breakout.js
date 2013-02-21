var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

window.onload = function() {
  var paper = Raphael( "breakout", 600, 400 );
  paper.rect(0, 0, 600, 400).attr('fill', '#e2e2e2');

  Breakout['screen'] = paper;
  Breakout['paddle'] = paper.paddle(380, 50, 10);
  Breakout['ball'] = paper.ball(0, 374, 6);
}

var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

window.onload = function() {
  var paper = Raphael( "breakout", 600, 400 );

  Breakout['screen'] = paper;
  Breakout['paddle'] = paper.paddle(380, 50, 10);
  Breakout['ball'] = paper.ball(0, 374, 6);

  Breakout.edges = {
    'top'    : paper.rect(0, 0, 600, 3).attr('fill', '#000')
  , 'left'   : paper.rect(0, 0, 3, 400).attr('fill', '#000')
  , 'bottom' : paper.rect(0, 397, 600, 10).attr('fill', '#000')
  , 'right'  : paper.rect(597, 0, 3, 400).attr('fill', '#000')
  }

}

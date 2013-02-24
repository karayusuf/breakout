var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

window.onload = function() {
  var container = document.getElementById( "breakout" );

  var paper = Raphael( "breakout", 600, 400 );
  paper.getElement = function( x, y ) {
    var x = x + container.offsetLeft
      , y = y + container.offsetTop;

    return paper.getElementByPoint( x, y );
  };

  Breakout['screen'] = paper;
  Breakout['paddle'] = paper.paddle(380, 50, 10);

  Breakout['ball'] = paper.ball(0, 374, 6);
  Breakout['ball'].attachToPaddle();

  Breakout.edges = {
    'top'    : paper.rect(0, 0, 600, 3).attr('fill', '#000')
  , 'left'   : paper.rect(0, 0, 3, 400).attr('fill', '#000')
  , 'bottom' : paper.bottomEdge()
  , 'right'  : paper.rect(597, 0, 3, 400).attr('fill', '#000')
  }

}

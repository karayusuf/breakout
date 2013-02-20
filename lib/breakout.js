var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

window.onload = function() {
  var paper = Raphael( "breakout", 600, 400 );

  Breakout.elements = {
    'screen' : paper
  , 'paddle' : paper.paddle(380, 50, 10)
  };
}

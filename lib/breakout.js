var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

window.onload = function() {
  Breakout.elements = {
    'screen' : Raphael( "breakout", 600, 400 )
  }

  Breakout.screen().draw();
  Breakout.paddle().draw();
}

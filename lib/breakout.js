var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.drawScreen = function( container ) {
  var width = 600
    , height = 400;

  this.screen = Raphael( container, width, height );
  this.screen.add([{
    'type'   : 'rect'
  , 'x'      : 0
  , 'y'      : 0
  , 'width'  : width
  , 'height' : height
  , 'fill'   : '#d2d2d2'
  }]);
};


window.onload = function() {
  Breakout.drawScreen( "breakout" );
  Breakout.paddle().draw();
}

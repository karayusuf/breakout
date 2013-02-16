var Breakout = {
  'drawScreen' : function( container ) {
    this.screen = Raphael( container, 600, 500 );
    this.screen.add([{
      'type'   : 'rect'
      , 'x'      : 0
      , 'y'      : 0
      , 'width'  : 600
      , 'height' : 500
      , 'fill'   : '#d2d2d2'
    }]);
  }
};


window.onload = function() {
  Breakout.drawScreen( "breakout" );
}

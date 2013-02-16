var Breakout;
if ( Breakout === undefined ) {
  Breakout = {};
}

Breakout.screen = function( id ) {
  var paper = Breakout.elements.screen;

  return {
    'add' : function( name, attrs ) {
      Breakout.elements[name] = paper.add([attrs]);
    },
    'draw' : function() {
      return paper.add([{
        'type'   : 'rect'
      , 'x'      : 0
      , 'y'      : 0
      , 'width'  : paper.width
      , 'height' : paper.height
      , 'fill'   : '#d2d2d2'
      }]);
    }
  }
}

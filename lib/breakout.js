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

  Breakout.bricks = {
    'red' : [ // Row 1
              Breakout.redBrick(paper,   0, 100)
            , Breakout.redBrick(paper,  50, 100)
            , Breakout.redBrick(paper, 100, 100)
            , Breakout.redBrick(paper, 150, 100)
            , Breakout.redBrick(paper, 200, 100)
            , Breakout.redBrick(paper, 250, 100)
            , Breakout.redBrick(paper, 300, 100)
            , Breakout.redBrick(paper, 350, 100)
            , Breakout.redBrick(paper, 400, 100)
            , Breakout.redBrick(paper, 450, 100)
            , Breakout.redBrick(paper, 500, 100)
            , Breakout.redBrick(paper, 550, 100)

            // Row 2
            , Breakout.redBrick(paper,   0, 110)
            , Breakout.redBrick(paper,  50, 110)
            , Breakout.redBrick(paper, 100, 110)
            , Breakout.redBrick(paper, 150, 110)
            , Breakout.redBrick(paper, 200, 110)
            , Breakout.redBrick(paper, 250, 110)
            , Breakout.redBrick(paper, 300, 110)
            , Breakout.redBrick(paper, 350, 110)
            , Breakout.redBrick(paper, 400, 110)
            , Breakout.redBrick(paper, 450, 110)
            , Breakout.redBrick(paper, 500, 110)
            , Breakout.redBrick(paper, 550, 110)
            ]
  , 'orange' : [ // Row 1
              Breakout.orangeBrick(paper,   0, 120)
            , Breakout.orangeBrick(paper,  50, 120)
            , Breakout.orangeBrick(paper, 100, 120)
            , Breakout.orangeBrick(paper, 150, 120)
            , Breakout.orangeBrick(paper, 200, 120)
            , Breakout.orangeBrick(paper, 250, 120)
            , Breakout.orangeBrick(paper, 300, 120)
            , Breakout.orangeBrick(paper, 350, 120)
            , Breakout.orangeBrick(paper, 400, 120)
            , Breakout.orangeBrick(paper, 450, 120)
            , Breakout.orangeBrick(paper, 500, 120)
            , Breakout.orangeBrick(paper, 550, 120)

            // Row 2
            , Breakout.orangeBrick(paper,   0, 130)
            , Breakout.orangeBrick(paper,  50, 130)
            , Breakout.orangeBrick(paper, 100, 130)
            , Breakout.orangeBrick(paper, 150, 130)
            , Breakout.orangeBrick(paper, 200, 130)
            , Breakout.orangeBrick(paper, 250, 130)
            , Breakout.orangeBrick(paper, 300, 130)
            , Breakout.orangeBrick(paper, 350, 130)
            , Breakout.orangeBrick(paper, 400, 130)
            , Breakout.orangeBrick(paper, 450, 130)
            , Breakout.orangeBrick(paper, 500, 130)
            , Breakout.orangeBrick(paper, 550, 130)
            ]
  , 'green' : [ // Row 1
              Breakout.greenBrick(paper,   0, 140)
            , Breakout.greenBrick(paper,  50, 140)
            , Breakout.greenBrick(paper, 100, 140)
            , Breakout.greenBrick(paper, 150, 140)
            , Breakout.greenBrick(paper, 200, 140)
            , Breakout.greenBrick(paper, 250, 140)
            , Breakout.greenBrick(paper, 300, 140)
            , Breakout.greenBrick(paper, 350, 140)
            , Breakout.greenBrick(paper, 400, 140)
            , Breakout.greenBrick(paper, 450, 140)
            , Breakout.greenBrick(paper, 500, 140)
            , Breakout.greenBrick(paper, 550, 140)

            // Row 2
            , Breakout.greenBrick(paper,   0, 150)
            , Breakout.greenBrick(paper,  50, 150)
            , Breakout.greenBrick(paper, 100, 150)
            , Breakout.greenBrick(paper, 150, 150)
            , Breakout.greenBrick(paper, 200, 150)
            , Breakout.greenBrick(paper, 250, 150)
            , Breakout.greenBrick(paper, 300, 150)
            , Breakout.greenBrick(paper, 350, 150)
            , Breakout.greenBrick(paper, 400, 150)
            , Breakout.greenBrick(paper, 450, 150)
            , Breakout.greenBrick(paper, 500, 150)
            , Breakout.greenBrick(paper, 550, 150)
            ]
  , 'yellow' : [ // Row 1
              Breakout.yellowBrick(paper,   0, 160)
            , Breakout.yellowBrick(paper,  50, 160)
            , Breakout.yellowBrick(paper, 100, 160)
            , Breakout.yellowBrick(paper, 150, 160)
            , Breakout.yellowBrick(paper, 200, 160)
            , Breakout.yellowBrick(paper, 250, 160)
            , Breakout.yellowBrick(paper, 300, 160)
            , Breakout.yellowBrick(paper, 350, 160)
            , Breakout.yellowBrick(paper, 400, 160)
            , Breakout.yellowBrick(paper, 450, 160)
            , Breakout.yellowBrick(paper, 500, 160)
            , Breakout.yellowBrick(paper, 550, 160)

            // Row 2
            , Breakout.yellowBrick(paper,   0, 170)
            , Breakout.yellowBrick(paper,  50, 170)
            , Breakout.yellowBrick(paper, 100, 170)
            , Breakout.yellowBrick(paper, 150, 170)
            , Breakout.yellowBrick(paper, 200, 170)
            , Breakout.yellowBrick(paper, 250, 170)
            , Breakout.yellowBrick(paper, 300, 170)
            , Breakout.yellowBrick(paper, 350, 170)
            , Breakout.yellowBrick(paper, 400, 170)
            , Breakout.yellowBrick(paper, 450, 170)
            , Breakout.yellowBrick(paper, 500, 170)
            , Breakout.yellowBrick(paper, 550, 170)
            ]
  }

  Breakout.edges = {
    'top'    : paper.rect(0, 0, 600, 3).attr('fill', '#000')
  , 'left'   : paper.rect(0, 0, 3, 400).attr('fill', '#000')
  , 'bottom' : paper.bottomEdge()
  , 'right'  : paper.rect(597, 0, 3, 400).attr('fill', '#000')
  }

}

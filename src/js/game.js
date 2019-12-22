var keyD
var keyA
var keyW
var keyS

var devArrayText
var scoreText
var levelText
var nextPieceImage

var frameInterval = 300
var map = null
var ps = null
var combos = 0 
var score = 0
var level = 0
var gameOver = false

class GameScene extends Phaser.Scene {
  constructor(){
    super()

  }

  preload(){

    this.imageGroup = this.add.group();
    this.load.image( 'background', 'assets/whiteBackground2.png' )
    var rect = this.add.rectangle( MAP_MARGIN, MAP_MARGIN, 500, 250, 0x000000 ).setOrigin(0,0)
    rect.setDepth( 10 )

    this.load.image( 'orange', 'assets/orange.png' )
    this.load.image( 'red', 'assets/red.png' )
    this.load.image( 'purple', 'assets/purple.png' )
    this.load.image( 'blue', 'assets/blue.png' )
    this.load.image( 'dark_blue', 'assets/dark_blue.png' )
    this.load.image( 'yellow', 'assets/yellow.png' )
    this.load.image( 'green', 'assets/green.png' )

    this.load.image( 'orangeTile', 'assets/orangeTile.jpg' )
    this.load.image( 'redTile', 'assets/redTile.jpg' )
    this.load.image( 'purpleTile', 'assets/purpleTile.jpg' )
    this.load.image( 'blueTile', 'assets/blueTile.jpg' )
    this.load.image( 'darkBlueTile', 'assets/darkBlueTile.jpg' )
    this.load.image( 'yellowTile', 'assets/yellowTile.jpg' )
    this.load.image( 'greenTile', 'assets/greenTile.jpg' )
    this.load.image( 'grayTile', 'assets/grayTile.jpg' )

  }

  create(){

    map = new Map( this )
    this.add.image( 10, 10, 'background' ).setOrigin(0,0)
    ps = new PieceSet( this )
    map.mapDrawer( )

    keyD = this.input.keyboard.addKey("D");
    keyA = this.input.keyboard.addKey("A");
    keyW = this.input.keyboard.addKey("W");
    keyS = this.input.keyboard.addKey("S");

    this.drawGui()
    this.drawDeveloperMap( )

    this.frame( )

  }

  update(){

    if( !gameOver ){
      if (Phaser.Input.Keyboard.JustDown(keyA)){
        ps.move('left')
      }
      if (Phaser.Input.Keyboard.JustDown(keyD)){
        ps.move('right')
      }

      if (Phaser.Input.Keyboard.JustDown(keyW)){
        ps.turn('right')
      }
      if (Phaser.Input.Keyboard.JustUp(keyS)){
        ps.move('down')
      }
    }

  }


  frame( ){

      setInterval( () => {

        if( this.isGameOver() ){
          return;
        }

        this.downCicle( )
        map.comboVerify()
        devArrayText.setText( map.getMap() )
        map.mapDrawer( this )

      }, frameInterval )
  }

  isGameOver(){
    for( var i = 0; i < map.xArrayLength; i++ ){
      var value =  map.getMapPosition( 4, i )
      if( value == 3 ){
        gameOver = true
        this.drawGameOverScreen()
        return true
      }
    }
    return false
  }

  drawGameOverScreen(){
        const gameOverLetters = this.add.text(500 / 2 , 500, 'Game Over', { fill: '#0f0' });
        gameOverLetters.setInteractive();
        gameOverLetters.on('pointerover', () => { this.restart() });
  }

  restart(){
    console.log( "restarting" )
  }

  downCicle( ){

    if( map.isDownLimit() == true ){
      map.tearDownPiece()
      ps.createAnotherPiece()
      return true
    }

    ps.downCicle()
    map.downCicle()
    return false

  }

  addNextPieceImage( next_piece_name ){
    if( nextPieceImage != null ) nextPieceImage.remove()
    nextPieceImage = this.add.image( DEV_X + 10, DEV_Y + 250 , next_piece_name ).setOrigin(0,0)
  }


  drawGui(){

    this.add.rectangle( DEV_X + 10, DEV_Y + 250, 110, 100, 0xFFFFFF ).setOrigin(0,0)
    this.addNextPieceImage( ps.next_piece_name )
    levelText = this.add.text( DEV_X + 15, DEV_Y+ 410, "Level: "+level, { fontSize: '20px', fill: '#FFFFFF' });
    scoreText = this.add.text( DEV_X + 15, DEV_Y+ 380, "Score: "+score, { fontSize: '20px', fill: '#FFFFFF' });

  }

  drawDeveloperMap( ){

      devArrayText = this.add.text( DEV_X + 150, DEV_Y+ 250, map.getMap(), { fontSize: '25px', fill: '#FFFFFF' });

  }

  incrSpeed(){
    combos++
    if( combos % 2 == 0 ){
      level
      frameInterval -= 30
    }
    score += 100

    levelText.setText( "Level: "+level )
    scoreText.setText( "Score: "+score )
  }

}

var config = {
    type: Phaser.AUTO,
    width: '150%',
    height: '180%',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: GameScene
};

var game = new Phaser.Game(config);

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

class GameScene extends Phaser.Scene {
  constructor(){
    super()

  }

  preload(){

    this.imageGroup = this.add.group();
    this.load.image( 'background', 'assets/whiteBackground.png' )

    this.load.image( 'orange', 'assets/orange.png' )
    this.load.image( 'red', 'assets/red.png' )
    this.load.image( 'purple', 'assets/purple.png' )
    this.load.image( 'blue', 'assets/blue.png' )
    this.load.image( 'dark_blue', 'assets/dark_blue.png' )
    this.load.image( 'yellow', 'assets/yellow.png' )
    this.load.image( 'green', 'assets/green.png' )


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


  frame( ){

      setInterval( () => {

        this.downCicle( )
        map.comboVerify()
        devArrayText.setText( map.getMap() )
        map.mapDrawer( this )

      }, frameInterval )
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
    nextPieceImage = this.add.image( DEV_X + 10, DEV_Y + 10 , next_piece_name ).setOrigin(0,0)
  }


  drawGui(){

    this.add.rectangle( DEV_X + 10, DEV_Y + 10, 110, 100, 0xFFFFFF ).setOrigin(0,0)
    this.addNextPieceImage( ps.next_piece_name )
    scoreText = this.add.text( DEV_X + 15, DEV_Y+ 160, "Level: 1", { fontSize: '20px', fill: '#FFFFFF' });
    levelText = this.add.text( DEV_X + 15, DEV_Y+ 130, "Score: 1", { fontSize: '20px', fill: '#FFFFFF' });

  }

  drawDeveloperMap( ){

      devArrayText = this.add.text( DEV_X + 150, DEV_Y+ 15, map.getMap(), { fontSize: '25px', fill: '#FFFFFF' });

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

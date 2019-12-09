var keyD
var keyA

var frameInterval = 1000
var map = null
var ps = null
var scoreText

class GameScene extends Phaser.Scene {
  constructor(){
    super()
  }

  preload(){

    this.imageGroup = this.add.group();
    this.load.image( 'background', 'assets/whiteBackground.png' )

  }

  create(){

    map = new Map( this )
    this.add.image( 10, 10, 'background' ).setOrigin(0,0)
    ps = new PieceSet( this )
    map.mapDrawer( )

    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    this.drawDeveloperMap( )
    this.frame( )

  }

  update(){

    if (Phaser.Input.Keyboard.JustDown(keyD))
    {
      ps.turn( "right" )
      map.mapDrawer()
    }
    if (Phaser.Input.Keyboard.JustDown(keyA))
    {
      ps.turn( "left" )
      map.mapDrawer()
    }

  }


  frame( ){

      setInterval( () => {

          this.movePieces( )
          scoreText.setText( map.getMap() )
          map.mapDrawer( this )

      }, frameInterval )
  }

  movePieces( ){

  }

  drawDeveloperMap( ){

      this.add.image( DEV_X, DEV_Y, 'background' ).setOrigin(0,0)
      scoreText = this.add.text( DEV_X + 15, DEV_Y+ 15, map.getMap(), { fontSize: '30px', fill: '#000' });

  }
}

var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 2500,
    scene: GameScene
};

var game = new Phaser.Game(config);

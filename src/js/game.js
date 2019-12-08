var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 2500,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var frameInterval = 1000

var game = new Phaser.Game(config);
var map

function preload(){
    this.load.image( 'background', 'assets/whiteBackground.png' ) 
}

function create(){

    map = new Map()
    this.add.image( 10, 10, 'background' ).setOrigin(0,0)
    goDeveloperMap( this )

    var ps = new PieceSet( this )

    frame( this )
}

function frame( mThis ){
    setInterval( () => {

        movePieces( mThis )
        goDeveloperMap( mThis )

    }, frameInterval )
}

function movePieces( mThis ){

}


function update(){


}



function goDeveloperMap( mThis ){
    const DEV_X = 550
    const DEV_Y = 10
    mThis.add.image( DEV_X, DEV_Y, 'background' ).setOrigin(0,0)

    scoreText = mThis.add.text( DEV_X + 15, DEV_Y+ 15, map.getMap(), { fontSize: '30px', fill: '#000' });

}
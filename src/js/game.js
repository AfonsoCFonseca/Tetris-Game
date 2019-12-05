var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1800,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);


function preload(){

    this.load.image( 'background', 'assets/whiteBackground.png' ) 
}

function create(){

    this.add.image( 50, 90, 'background' )
    var r1 = this.add.rectangle( 50, 50, 16, 16, 0x6666ff);

    createMap()
}

function createMap() {
    var tetrisMap = []
    var MAP_HEIGHT = 20
    var MAP_WITDTH = 10

    for( var i = 0; i < MAP_HEIGHT; i++ ) {
        tetrisMap[i] = []

        for( var j = 0; j < MAP_WITDTH; j++ ){
            tetrisMap[i][j] = 0
        }
    }

    console.log( tetrisMap )
}


function update(){}


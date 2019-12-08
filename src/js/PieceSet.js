class PieceSet extends Map{

    constructor( mThis){
    	super()   

        this.allPieces = [ "a","b","c","d","f","g" ]

        var piece = this.chooseRandomPiece()
        var { x, y } = map.getNewSetPiecePosition( piece ) 
        this.x = x
        this.y = y
		mThis.add.rectangle( this.x, this.y, SET_PIECE_SIZE, SET_PIECE_SIZE, PIECE_SET_COLOR).setOrigin(0,0)
    }

    setPosition( x, y ){
    	this.x = x
    	this.y = y
    }

    getPositionX(){
    	return this.x
    }

    getPositionY(){
    	return this.y
    }

    chooseRandomPiece(){
        var rand = Phaser.Math.Between( 0, 6 )
        var piece = this.allPieces[ rand ]
        var pieceMap = toolbox( piece )
        return pieceMap
    }

}
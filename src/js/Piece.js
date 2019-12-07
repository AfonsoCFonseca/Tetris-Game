const SET_PIECE_SIZE = 200
const PIECE_SIZE = 50
const MARGIN = 10
const COLOR = 0x6666ff

class PieceSet extends Map{
    constructor( mThis){
    	super()
    	
		this.y = 10
    	this.x = 10
		mThis.add.rectangle( this.x, this.y, SET_PIECE_SIZE, SET_PIECE_SIZE, COLOR).setOrigin(0,0)
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

}
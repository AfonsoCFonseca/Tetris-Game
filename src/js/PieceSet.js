class PieceSet {

    constructor( ){

        this.allPieces = [ "a","b","c","d", "e","f","g" ]
        this.pieceLetter = ""
        this.piece = this.chooseRandomPiece()
        this.pieceColor = this.getColor()
        var { x, y } = map.getNewSetPiecePosition( this.piece ) 

        this.x = x
        this.y = y
        ps = this.piece
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
        
    getColor(){
        switch( this.pieceLetter ){
            case "a": 
                return COLOR_PIECE_A
            case "b": 
                return COLOR_PIECE_B
            case "c": 
                return COLOR_PIECE_C 
            case "d": 
                return COLOR_PIECE_D 
            case "e": 
                return COLOR_PIECE_E
            case "f": 
                return COLOR_PIECE_F
            case "g": 
                return COLOR_PIECE_G

        }
    }

    chooseRandomPiece(){
        var rand = Phaser.Math.Between( 0, 6 )
        this.pieceLetter = this.allPieces[ rand ]
        var pieceMap = toolbox( this.pieceLetter )
        return pieceMap
    }

}
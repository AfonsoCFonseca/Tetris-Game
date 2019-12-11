class PieceSet {

    constructor( mThis ){

        this.allPieces = [ "a","b","c","d", "e","f","g" ]
        this.pieceLetter = ""
        this.piece = this.chooseRandomPiece()
        this.pieceColor = this.getColor()

        this.pieceOriention = "NORTH"

        var { x, y } = map.getNewSetPiecePosition( this.piece )

        this.setPosition( x, y )

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

    turn( side ){

      if( side == "left" ){
        this.pieceOriention = turnLeftOriention( this.pieceOriention )
        this.piece = toolbox( this.pieceLetter, this.pieceOriention )
        map.movementPieceSet( this.x, this.y, this.piece )
      }
      else if( side == "right" ){
        this.pieceOriention = turnRightOriention( this.pieceOriention )
        this.piece = toolbox( this.pieceLetter, this.pieceOriention )
        map.movementPieceSet( this.x, this.y, this.piece )
      }

    }

    move( side ){

      if( side == "left" ){
        this.setPosition( this.x - 50 ,this.y )
        map.movementPieceSet( this.x, this.y, this.piece )
      }
      else if( side == "right" ){
        this.setPosition( this.x + 50 ,this.y )
        map.movementPieceSet( this.x, this.y, this.piece )
      }

    }

    downCicle( ){
      var { xArr, yArr } = convertFromWidthToMap( this.x, this.y )
      var { x, y } = convertFromMapToWidth( xArr, ++yArr )
      this.setPosition( x, y )
    }

    chooseRandomPiece(){
        var rand = Phaser.Math.Between( 0, 6 )
        this.pieceLetter = this.allPieces[ rand ]
        var pieceMap = toolbox( this.pieceLetter )
        return pieceMap
    }

}

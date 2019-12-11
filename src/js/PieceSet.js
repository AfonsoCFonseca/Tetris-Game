class PieceSet {

    constructor( mThis ){

        this.allPieces = [ "blue","dark_blue","green","purple", "red","orange","yellow" ]
        this.pieceColor = ""
        this.piece = this.chooseRandomPiece()
        this.pieceColor = this.getColor()
        this.next_piece_name = this.allPieces[ Phaser.Math.Between( 0, 6 ) ]

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
        switch( this.pieceColor ){
            case "blue":
                return COLOR_PIECE_A
            case "dark_blue":
                return COLOR_PIECE_B
            case "green":
                return COLOR_PIECE_C
            case "purple":
                return COLOR_PIECE_D
            case "red":
                return COLOR_PIECE_E
            case "orange":
                return COLOR_PIECE_F
            case "yellow":
                return COLOR_PIECE_G

        }
    }

    turn( side ){

      if( side == "left" ){
        this.pieceOriention = turnLeftOriention( this.pieceOriention )
        this.piece = toolbox( this.pieceColor, this.pieceOriention )
        map.movementPieceSet( this.x, this.y, this.piece )
      }
      else if( side == "right" ){
        this.pieceOriention = turnRightOriention( this.pieceOriention )
        this.piece = toolbox( this.pieceColor, this.pieceOriention )
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
        this.pieceColor = this.allPieces[ Phaser.Math.Between( 0, 6 ) ]
        return toolbox( this.pieceColor )
    }

}

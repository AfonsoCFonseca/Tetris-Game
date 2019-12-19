class PieceSet {

    constructor( scene ){

        this.allPieces = [ "blue","dark_blue","green","purple", "red","orange","yellow" ]
        this.pieceColor;
        this.piece = this.chooseRandomPiece()
        this.pieceColorHash = this.getColor()
        this.next_piece_name = this.allPieces[ Phaser.Math.Between( 0, 6 ) ]
        this.pieceOriention = "NORTH"
        this.scene = scene

        var { x, y } = map.getNewSetPiecePosition( this.piece )
        var { xArr, yArr } = convertFromWidthToMap( x, y )
        this.xArr = xArr
        this.yArr = yArr


        this.setPosition( x, y )

    }

    setPosition( x, y ){
        this.x = x
        this.y = y
        var { xArr, yArr } = convertFromWidthToMap( x, y )
        this.xArr = xArr
        this.yArr = yArr
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

    createAnotherPiece(){

        this.pieceColor = this.next_piece_name
        this.piece = toolbox( this.next_piece_name, "NORTH" )
        this.pieceColorHash = this.getColor()
        this.next_piece_name = this.allPieces[ Phaser.Math.Between( 0, 6 ) ]
        this.pieceOriention = "NORTH"

        if( nextPieceImage != null ) nextPieceImage.destroy()
        nextPieceImage = this.scene.add.image( DEV_X + 10, DEV_Y + 10 , this.next_piece_name ).setOrigin(0,0)

        var { x, y } = map.getNewSetPiecePosition( this.piece )

        this.setPosition( x, y )

    }

    turn( side ){

      var possibleOrientation = turnOriention( side, this.pieceOriention )
      var possiblePiece = toolbox( this.pieceColor, possibleOrientation )
      var result = map.isTurnLimit( side, possiblePiece )
      if( result == "limited" ){
        return
      }
      else if( typeof result == "object" ){
        this.setPosition( result.x, result.y)
      }

      this.pieceOriention = possibleOrientation
      this.piece = possiblePiece
      map.movementPieceSet( this.x, this.y, this.piece )

    }

    move( side ){

      if( side == "left" && !map.isSideLimit( 'left' ) ){
        this.setPosition( this.x - 50 ,this.y )
        map.movementPieceSet( this.x, this.y, this.piece )
      }
      else if( side == "right" && !map.isSideLimit( 'right' ) ){
        this.setPosition( this.x + 50 ,this.y )
        map.movementPieceSet( this.x, this.y, this.piece )
      }
      else if( side == "down" ){
        var hitObject = false
        do {
            hitObject = this.scene.downCicle()
        } while( !hitObject )
      }

    }

    downCicle( ){
      var { xArr, yArr } = convertFromWidthToMap( this.x, this.y )
      var { x, y } = convertFromMapToWidth( xArr, ++yArr )
      this.setPosition( x, y )
    }

    chooseRandomPiece(){
      this.pieceColor = this.allPieces[ Phaser.Math.Between( 0, 6 ) ]
      this.piece = toolbox( this.pieceColor, this.pieceOriention )
      return this.piece
    }

}

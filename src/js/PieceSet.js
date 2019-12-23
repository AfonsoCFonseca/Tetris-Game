class PieceSet {

    constructor( scene ){

        this.allPieces = [ "blue","dark_blue","green","purple", "red","orange","yellow" ]
        this.pieceColor;
        this.piece = this.chooseRandomPiece()
        this.pieceColorHash = this.getColor()
        this.next_piece_name = this.takePieceFromRandomBox()
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
                return "blueTile"
            case "dark_blue":
                return "darkBlueTile"
            case "green":
                return "greenTile"
            case "purple":
                return "purpleTile"
            case "red":
                return "redTile"
            case "orange":
                return "orangeTile"
            case "yellow":
                return "yellowTile"

        }
    }

    createAnotherPiece(){

        this.pieceColor = this.next_piece_name
        this.piece = toolbox( this.next_piece_name, "NORTH" )
        this.pieceColorHash = this.getColor()
        this.next_piece_name = this.takePieceFromRandomBox()
        this.pieceOriention = "NORTH"

        if( nextPieceImage != null ) nextPieceImage.destroy()
        nextPieceImage = this.scene.add.image( 20, 80, this.next_piece_name ).setOrigin(0,0)
        nextPieceImage.setDepth( 12 )

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
      this.pieceColor = this.takePieceFromRandomBox()
      this.piece = toolbox( this.pieceColor, this.pieceOriention )
      return this.piece
    }

    takePieceFromRandomBox(){
      if( actualRandomPieces.length <= 0 ) 
          actualRandomPieces = [
           "blue","dark_blue","green","purple", "red","orange","yellow",
           "blue","dark_blue","green","purple", "red","orange","yellow" 
          ]

        var index = Phaser.Math.Between( 0, actualRandomPieces.length - 1 )
        var piece = actualRandomPieces[index]
    

      actualRandomPieces.splice( index, 1 )
      return piece
    }

}

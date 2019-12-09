class Map {

	constructor( mThis ){

		this.yArrayLength = 20
		this.xArrayLength = 10
		this.pieceSet = null;
		this.tetrisMap = []
		this.createMap()
		this.groupOfSquares = []
		this.mThis = mThis

	}

	createMap() {

	    for( var i = 0; i < this.yArrayLength; i++ ) {
	        this.tetrisMap[i] = []

	        for( var j = 0; j < this.xArrayLength; j++ ){
	            this.tetrisMap[i][j] = 0
	        }
	    }
	}

	getMap(){
		return this.tetrisMap
	}

	getMapPosition( d1, d2 ){
		return this.tetrisMap[ d1 ][ d2 ]
	}

	getNewSetPiecePosition( pieceMap ){
		var xArr = Phaser.Math.Between(4, this.xArrayLength )
		var yArr = 0
		var contadorPieceX = 0;
		var contadorPieceY = 0

		for( var i = xArr - 4; i < xArr; i++ ){ //Drawing X

			for( var j = 0; j < 4; j++ ){ //Drawing Y

				var valueMap = converValuesForSetPiece( pieceMap[contadorPieceY][contadorPieceX] )
				this.setMapPosition( j, i, valueMap )
				contadorPieceY++
			}
			contadorPieceY = 0
			contadorPieceX++
		}

		var x = ( ( xArr - 4 ) * PIECE_SIZE ) + MAP_MARGIN
		var y = ( yArr * 50 ) + MAP_MARGIN

		return { x, y }
	}

	turnSetPositionOnMap( x, y, pieceMap ){
		var { xArr, yArr } = convertFromWidthToMap( x, y )

		var contadorX = 0
		var contadorY = 0

		for( var j = xArr; j < xArr + 4 ; j++ ){
			for( var i = yArr; i < yArr + 4 ; i++ ){

					var valueMap = converValuesForSetPiece( pieceMap[contadorY][contadorX] )
					this.setMapPosition( i, j, valueMap )
					contadorY++

			}
			contadorY = 0;
			contadorX++
		}

	}

///////// SETTER /////////
	setMapPosition( d1, d2, value ){
		this.tetrisMap[ d1 ][ d2 ] = value
	}

///////// MAP DRAWER /////////
	mapDrawer( ){

		this.mThis.imageGroup.clear(true);

		for( var i = 0; i < this.xArrayLength; i++ ){
						for( var j = 0; j < this.yArrayLength; j++ ) {

	        	if( this.tetrisMap[j][i] == "2" ){
							var { x , y } = convertFromMapToWidth( i, j )
	        		var square = this.mThis.add.rectangle( x, y, PIECE_SIZE, PIECE_SIZE, ps.pieceColor ).setOrigin(0,0)
							this.mThis.imageGroup.add(square);
	        	}

	        }
	    }

	}

}

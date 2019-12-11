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

	clearMap(){

		for( var i = 0; i < this.yArrayLength; i++ ) {
				this.tetrisMap[i] = []

				for( var j = 0; j < this.xArrayLength; j++ ){
						this.tetrisMap[i][j] = 0
				}
		}

	}

	movementPieceSet( x, y, pieceMap ){
		this.clearMap()

		var { xArr, yArr } = convertFromWidthToMap( x, y )

		var contadorX = 0
		var contadorY = 0

		for( var i = xArr; i < xArr + 4 ; i++ ){
			for( var j = yArr; j < yArr + 4 ; j++ ){

					var valueMap = converValuesForSetPiece( pieceMap[contadorY][contadorX] )
					this.setMapPosition( j, i, valueMap )
					contadorY++

			}
			contadorY = 0;
			contadorX++
		}

		this.mapDrawer()
	}

///////// SETTER /////////
	setMapPosition( d1, d2, value ){
		this.tetrisMap[ d1 ][ d2 ] = value
	}

///////// MAP DRAWER /////////
	mapDrawer( ){

		this.mThis.imageGroup.clear(true)

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

///////// MOVEMENT /////////
	downCicle(){

		var olderState = null
		var newState = [ 0,0,0,0,0,0,0,0,0,0 ]

		for( var i = 0; i < this.yArrayLength; i++ ) {

				olderState = this.tetrisMap[i]
				this.tetrisMap[i] = newState
				newState = olderState


		}

	}

}

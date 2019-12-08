class Map {
	
	constructor( ){

		this.yArrayLength = 20
		this.xArrayLength = 10
		this.pieceSet = null;
		this.tetrisMap = []
		this.createMap()

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

				var arrValue = pieceMap[contadorPieceY][contadorPieceX] == 0 ? 1 : 2
				contadorPieceY++

				this.setMapPosition( j, i, arrValue )
			}
			contadorPieceY = 0
			contadorPieceX++
		}

		var x = ( ( xArr - 4 ) * PIECE_SIZE ) + MAP_MARGIN
		var y = ( yArr * 50 ) + MAP_MARGIN

		return { x, y }
	}

	setMapPosition( d1, d2, value ){

		this.tetrisMap[ d1 ][ d2 ] = value 
	}

	mapDrawer( mThis ){

		for( var i = 0; i < this.yArrayLength; i++ ) {

	        for( var j = 0; j < this.xArrayLength; j++ ){

	        	if( this.tetrisMap[i][j] == "2" ){
	        		var x = ( j * PIECE_SIZE ) + MAP_MARGIN
	        		var y = ( i * PIECE_SIZE ) + MAP_MARGIN
	        		mThis.add.rectangle( x, y, PIECE_SIZE, PIECE_SIZE, ps.pieceColor ).setOrigin(0,0)
	        	}

	        }
	    }

	}

}
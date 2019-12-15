class Map {

	constructor( scene ){

		this.yArrayLength = 20
		this.xArrayLength = 10
		this.pieceSet = null;
		this.tetrisMap = []
		this.createMap()
		this.groupOfSquares = []
		this.scene = scene

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

				var valueMap = convertValuesForSetPiece( pieceMap[contadorPieceY][contadorPieceX] )
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

			for( var j = 0; j < this.xArrayLength; j++ ){
				if( this.tetrisMap[i][j] == "3" ) continue

				this.tetrisMap[i][j] = 0
			}
		}

	}

	isSideLimit( side ){

		for( var i = 0; i < this.yArrayLength; i++ ) {
			for( var j = 0; j < this.xArrayLength; j++ ){
				if( this.tetrisMap[i][ side == 'right' ? this.xArrayLength - 1 : 0 ] == 2 )
					return true
			}
		}
		return false

	}

	isDownLimit(){

		// Contact piece with piece
		for( var j = 0; j < 4; j++ ){

			if( this.getLastYpiece( j ) == "2" ) {
				 if( this.isTouchingFloor() || this.isTouchingDownPiece( j ) )
					return true
			}

		}

		return false
	}

	getLastYpiece( x ){
		return this.getMapPosition( ps.yArr + 3, ps.xArr + x )
	}

	isTouchingDownPiece( x ){
		return this.getMapPosition( ps.yArr + 4, ps.xArr + x  ) == "3"
	}

	isTouchingFloor(){
		return ps.yArr + 4 == 20
	}

	movementPieceSet( x, y, pieceMap ){
		this.clearMap()

		var contadorX = 0
		var contadorY = 0

		for( var i = ps.xArr; i < ps.xArr + 4 ; i++ ){
			for( var j = ps.yArr; j < ps.yArr + 4 ; j++ ){

					var valueMap = convertValuesForSetPiece( pieceMap[contadorY][contadorX] )
					this.setMapPosition( j, i, valueMap )
					contadorY++

			}
			contadorY = 0;
			contadorX++
		}

		this.mapDrawer()
	}

	tearDownPiece(){

		for( var i = 0; i < this.yArrayLength; i++ ) {
			for( var j = 0; j < this.xArrayLength; j++ ){
				if( this.tetrisMap[i][j] == "2" )
					this.tetrisMap[i][j] = "3"
			}
		}

	}

///////// SETTER /////////
	setMapPosition( d1, d2, value ){
		this.tetrisMap[ d1 ][ d2 ] = value
	}

///////// MAP DRAWER /////////
	mapDrawer( ){

		this.scene.imageGroup.clear(true)

		for( var i = 0; i < this.xArrayLength; i++ ){
			for( var j = 0; j < this.yArrayLength; j++ ) {

	        	if( this.tetrisMap[j][i] == "2" ){
					var { x , y } = convertFromMapToWidth( i, j )
	        		var square = this.scene.add.rectangle( x, y, PIECE_SIZE, PIECE_SIZE, ps.pieceColorHash ).setOrigin(0,0)
					this.scene.imageGroup.add(square);
	        	}
				if( this.tetrisMap[j][i] == "3" ){
					var { x , y } = convertFromMapToWidth( i, j )
	        		var square = this.scene.add.rectangle( x, y, PIECE_SIZE, PIECE_SIZE, 0x000000 ).setOrigin(0,0)
					this.scene.imageGroup.add(square);
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

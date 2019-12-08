class Map {
	
	constructor(){

		this.yArrayLength = 20
		this.xArrayLength = 10

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
		console.log( pieceMap )
		var xArr = Phaser.Math.Between(4, this.xArrayLength );
		var yArr = 0

		for( var i = xArr - 4; i < xArr; i++ ){
			this.setMapPosition( 0, i, 1 )

			for( var j = 0; j < 4; j++ ){
				this.setMapPosition( j, i, 1 )
			}
		}

		var x = ( ( xArr - 4 ) * PIECE_SIZE ) + MAP_MARGIN
		var y = ( yArr * 50 ) + MAP_MARGIN

		return { x, y }
	}

	setMapPosition( d1, d2, value ){
		this.tetrisMap[ d1 ][ d2 ] = value 
	}

}
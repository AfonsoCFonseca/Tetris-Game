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

	setMapPosition( d1, d2, value ){
		this.tetrisMap[ d1 ][ d2 ] = value 
	}

}
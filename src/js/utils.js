///////// CONVERTER /////////
	function convertFromMapToWidth( xArr, yArr ){
    var x = ( xArr * PIECE_SIZE ) + MAP_MARGIN
    var y = ( yArr * PIECE_SIZE ) + MAP_MARGIN
		return { x, y }
	}

	function convertFromWidthToMap( x, y ){
    var xArr = ( x - MAP_MARGIN ) / PIECE_SIZE
    var yArr = ( y - MAP_MARGIN ) / PIECE_SIZE
		return { xArr, yArr }
	}

	function convertValuesForSetPiece( piece ){
		return piece == 1 ? 2: 0
	}

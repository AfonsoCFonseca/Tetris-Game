const SET_PIECE_SIZE = 200
const PIECE_SIZE = 50
const MAP_MARGIN = 10
const PIECE_SET_COLOR = 0x6666ff


function toolbox( piece, position = "default" ){

	var templateEscape = [
		[0,0,0,0],
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0]
	]

	switch( piece ){
		case "a":
			return templateEscape
			break;
		case "b": 
			return templateEscape
			break;
		case "c": 
			return templateEscape
			break;
		case "d": 
			return templateEscape
			break;
		case "e": 
			return templateEscape
			break;
		case "f": 
			return templateEscape
			break;
		case "g": 
			return templateEscape
			break;
		case "default": 
			console.log( "default value toolbox")
			return templateEscape
			break;
	}

}
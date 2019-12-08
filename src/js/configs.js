const SET_PIECE_SIZE = 200
const PIECE_SIZE = 50
const MAP_MARGIN = 10
const PIECE_SET_COLOR = 0x6666ff

const DEV_X = 550
const DEV_Y = 10

const COLOR_PIECE_A = 0x00ECEC
const COLOR_PIECE_B = 0x0000F0
const COLOR_PIECE_C = 0x00F000
const COLOR_PIECE_D = 0xA000F0
const COLOR_PIECE_E = 0xF00000
const COLOR_PIECE_F = 0xF0A000
const COLOR_PIECE_G = 0xF0F000


function toolbox( piece, position = "default" ){

	switch( piece ){
		case "a":
			return pieceArot( position )
			break;
		case "b": 
			return pieceBrot( position )
			break;
		case "c": 
			return pieceCrot( position )
			break;
		case "d": 
			return pieceDrot( position )
			break;
		case "e": 
			return pieceErot( position )
			break;
		case "f": 
			return pieceFrot( position )
			break;
		case "g": 
			return pieceGrot( position )
			break;
		case "default": 
			console.log( "default value toolbox")
			return pieceGrot( position )
			break;
	}

}

function pieceArot( state ){
	switch( state ){
		case "north":
		case "south":
			return [
				[1,0,0,0],
				[1,0,0,0],
				[1,0,0,0],
				[1,0,0,0]
			]
		case "east": 
		case "west": 
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,0,0,0],
				[1,1,1,1]
			]
		default:
			return [
				[1,0,0,0],
				[1,0,0,0],
				[1,0,0,0],
				[1,0,0,0]
			]
	}
}

function pieceBrot( state ){
	switch( state ){
		case "north":
			return [
				[0,0,0,0],
				[0,0,1,0],
				[0,0,1,0],
				[0,1,1,0]
			]
		case "east": 
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,1,0,0],
				[0,1,1,1]
			]
		case "west": 
			return [
				[0,0,0,0],
				[0,1,1,0],
				[0,1,0,0],
				[0,1,0,0]
			]
		case "south": 
		default:
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,1,1,1],
				[0,0,0,1]
			]
	}
}

function pieceCrot( state ){
	switch( state ){
		case "south": 
		case "north":
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,1,1,0],
				[1,1,0,0]
			]
		case "west": 
		case "east": 
		default:
			return [
				[0,0,0,0],
				[1,0,0,0],
				[1,1,0,0],
				[0,1,0,0]
			]
	}
}

function pieceDrot( state ){
	switch( state ){
		case "south": 
		case "north":
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,1,1,0],
				[0,0,1,1]
			]
		case "west": 
		case "east": 
		default:
			return [
				[0,0,0,0],
				[0,0,0,1],
				[0,0,1,1],
				[0,0,1,0]
			]
	}
}

function pieceErot( state ){
	switch( state ){
		case "north":
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,1,0,0],
				[1,1,1,0]
			]
		case "east": 
			return [
				[0,0,0,0],
				[1,0,0,0],
				[1,1,0,0],
				[1,0,0,0]
			]
		case "west": 
			return [
				[0,0,0,0],
				[0,0,0,0],
				[1,1,1,0],
				[0,1,0,0]
			]
		case "south": 
		default:
			return [
				[0,0,0,0],
				[0,1,0,0],
				[1,1,0,0],
				[0,1,0,0]
			]
	}
}

function pieceFrot( state ){
	switch( state ){
		case "north":
			return [
				[0,0,0,0],
				[1,0,0,0],
				[1,0,0,0],
				[1,1,0,0]
			]
		case "east": 
			return [
				[0,0,0,0],
				[0,0,0,0],
				[1,1,1,0],
				[1,0,0,0]
			]
		case "west": 
			return [
				[0,0,0,0],
				[1,1,0,0],
				[0,1,0,0],
				[0,1,0,0]
			]
		case "south": 
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,0,0,1],
				[0,1,1,1]
			]
		default:
			return [
				[0,0,0,0],
				[0,0,1,0],
				[0,0,1,0],
				[0,1,1,0]
			]
	}
}

function pieceGrot( state ){
	
	return [
		[0,0,0,0],
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0]
	]
		
}
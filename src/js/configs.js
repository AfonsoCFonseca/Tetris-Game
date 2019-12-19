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

var actualRandomPieces = []

function toolbox( piece, position = "NORTH" ){

	switch( piece ){
		case "blue":
			return pieceArot( position )
			break;
		case "dark_blue":
			return pieceBrot( position )
			break;
		case "green":
			return pieceCrot( position )
			break;
		case "purple":
			return pieceDrot( position )
			break;
		case "red":
			return pieceErot( position )
			break;
		case "orange":
			return pieceFrot( position )
			break;
		case "yellow":
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
		case "NORTH":
		case "SOUTH":
			return [
				[0,1,0,0],
				[0,1,0,0],
				[0,1,0,0],
				[0,1,0,0]
			]
		case "EAST":
		case "WEST":
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,0,0,0],
				[1,1,1,1]
			]
		default:
			return [
				[0,1,0,0],
				[0,1,0,0],
				[0,1,0,0],
				[0,1,0,0]
			]
	}
}

function pieceBrot( state ){
	switch( state ){
		case "NORTH":
			return [
				[0,0,0,0],
				[0,0,1,0],
				[0,0,1,0],
				[0,1,1,0]
			]
		case "EAST":
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,1,0,0],
				[0,1,1,1]
			]
		case "SOUTH":
			return [
				[0,0,0,0],
				[0,1,1,0],
				[0,1,0,0],
				[0,1,0,0]
			]
		case "WEST":
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
		case "SOUTH":
		case "NORTH":
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,1,1,0],
				[1,1,0,0]
			]
		case "WEST":
		case "EAST":
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
		case "SOUTH":
		case "NORTH":
			return [
				[0,0,0,0],
				[0,0,0,0],
				[1,1,0,0],
				[0,1,1,0]
			]
		case "WEST":
		case "EAST":
		default:
			return [
				[0,0,0,0],
				[0,0,1,0],
				[0,1,1,0],
				[0,1,0,0]
			]
	}
}

function pieceErot( state ){
	switch( state ){
		case "NORTH":
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,1,0,0],
				[1,1,1,0]
			]
		case "EAST":
			return [
				[0,0,0,0],
				[1,0,0,0],
				[1,1,0,0],
				[1,0,0,0]
			]
		case "SOUTH":
			return [
				[0,0,0,0],
				[1,1,1,0],
				[0,1,0,0],
				[0,0,0,0]
			]
		case "WEST":
		default:
			return [
				[0,0,0,0],
				[0,0,1,0],
				[0,1,1,0],
				[0,0,1,0]
			]

	}
}

function pieceFrot( state ){
	switch( state ){
		case "NORTH":
			return [
				[0,0,0,0],
				[1,0,0,0],
				[1,0,0,0],
				[1,1,0,0]
			]
		case "EAST":
			return [
				[0,0,0,0],
				[0,0,0,0],
				[1,1,1,0],
				[1,0,0,0]
			]
		case "SOUTH":
			return [
				[0,0,0,0],
				[1,1,0,0],
				[0,1,0,0],
				[0,1,0,0]
			]
		case "WEST":
			return [
				[0,0,0,0],
				[0,0,0,0],
				[0,0,1,0],
				[1,1,1,0]
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


function turnOriention( side, orientation ){
	switch( orientation ) {
		case "NORTH" :
			return side == "right" ? "EAST" : "WEST"
		case "EAST" :
			return side == "right" ? "SOUTH" : "NORTH"
		case "WEST" :
			return side == "right" ? "NORTH" : "SOUTH"
		case "SOUTH" :
			return side == "right" ? "WEST" : "EAST"
		default:
			console.log("default")

	}
}

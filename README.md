## Tetris_game
 
Traditional Tetris game, running on Phaser 3, made just for keeping my mind exercised

### Structure ###

10 x 20 Bi-dimensional Array

Piece values on an array
 0 - Blank Space
 1 or 2 - Piece Space
 3 - Landed Piece Space

PieceSet

[ 0, 0, 0, 0 ]   
[ 0, 0, 0, 0 ]   
[ 0, 1, 0, 0 ]   
[ 1, 1, 1, 0 ]   

### Logic ###

I've created the piece set to be represented 4x4 2D Array
With that in mind, I've created a class named toolbox, where I've stored all the pieces and the related rotation combinations, this toolbox return a random piece to be declared to the PieceSet Class

The Game ticks every X time, where X, starts with 500ms and decrements every two-line combo happens
The tick means that every first dimension of the array ( X-axis ) moves one position forward, so it can simulate the movement

Combo Line - Every time, one position of the first dimension of the array assume the value of 3

### Evolution & Design ###

I started the project with using the class Rectangles from Phaser to draw the map pieces

I draw a single tile in photoshop and applied a layer with 20% opacity for each color I used
( blue, dark blue, green, yellow, orange, red, purple and gray )

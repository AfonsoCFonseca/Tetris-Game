## Tetris_game
 
Traditional Tetris game, running on Phaser 3, made just for keeping my mind exercised

## How to Deploy ##
On the project terminal run: 
```
npm i;
npm run build;
node index
```
then access on your browser to: localhost:8080

To access a live version running on a server ( the server may take a couple of minutes to boot, before starting the game )
-> https://tetrisgame1991.onrender.com/ <-
( also, it's a slow server )

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

I've created the piece set to be represented 4x4 2D Array.
With that in mind, I've made a class named Toolbox, where I've stored all the pieces and the related rotation combinations. This toolbox return a random piece to be declared by the PieceSet Class

The Game ticks every X time, where X, starts with 500ms and decrements every 2x Line Combo
The tick means that every first dimension of the array ( X-axis ) moves one position forward, so it can simulate the movement

Combo Line - Every time, one position of the first dimension of the array assume the value of 3

### Evolution & Design ###

I started the project using the class Rectangles from Phaser to draw the map pieces

<img src='https://github.com/AfonsoCFonseca/Tetris-Game/blob/master/screenshots/firstMap.png'>

I drew a single tile in photoshop and applied a layer with 20% opacity for each color I used
( blue, dark blue, green, yellow, orange, red, purple and gray )

<p float="left">
  <img src='https://github.com/AfonsoCFonseca/Tetris-Game/blob/master/screenshots/mapGameover.png'>
  <img src='https://github.com/AfonsoCFonseca/Tetris-Game/blob/master/screenshots/pieceAndMapDesign.png'>
</p>


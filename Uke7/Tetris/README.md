# **<u>Tetris JS</u>**

Tetris JS is a simple tetris clone using javascript. The goal of the projects is to create a working game that can be easily embedded in any site, and resized dynamically.
The game can take input from buttons generated in js an placed in html, or using keyboard inputs. 

## Fearture goals :+1:
- [ ] MVC structure using a NxM array backend data model
- [ ] Easily embedable using a single div tag and script import
- [ ] Dynamically generate either canvas or grid based layout based on casses in div tag
- [ ] Min and Max size defined in div tag
- [ ] Flexible css added in js file


## Including tetris.js
Include TetrisJS using a script tag in &#60;head&#62; and call "main()" onload in body.
```
<head>
	<script type="text/javascript" src="*pathTo*/tetris.js" />
</head>
<body onload="main()">
	<div class="parameters" id="tetris"></div>
</body>
```

Grid Layout or canvas rendering is selectable in div tag.<br />
Syntax: 
```
<div class="tetris *RenderMode* *width* *height*"></div>
```
#### Params: 
- RenderMode: Sets the way tetris.js will draw the game board on screen. (canvas or grid)
- Width: Game board width in pixels on screen
- Height: Game board height in pixels on screen
	
Demo site: <a href="https://wisetorsk.github.io/StartIT3/Uke7/Tetris/tetrisJS_TestPage.html">TETRIS!</a>

## Program steps:
- Build board data structure
- Render the game board
- Loop start
  - if (timer > interval && no moving pieces) \{ Generate new piece \}
  - listen for keyboard input
  - Move the non-static piece down by one y index.
  - if (a whole x row is full with cells) \{ Remove it and shift down \}
- goto Loop
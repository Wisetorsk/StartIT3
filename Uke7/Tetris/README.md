<h1>Tetris JS</h1>

<ul><h3><u>Fearture goals</u></h3>
	<li>MVC structure using a NxM array backend data model</li>
	<li>Easily embedable using a single div tag and script import</li>
	<li>Dynamically generate either canvas or grid based layout based on casses in div tag</li>
	<li>Min and Max size defined in div tag</li>
	<li>Flexible css added in js file</li>

</ul>

<p>
	Grid Layout or canvas rendering is selectable in div tag. <br />
	Syntax: 
	```
	&#60;div class="tetris *RenderMode* *width* *height*"&#62;&#60;/div&#62; <br />
	```
	Params: 
	<ul>
	<li>RenderMode: Sets the way tetris.js will draw the game board on screen. (canvas or grid)</li>
	<li>width: Game board width in pixels on screen</li>
	<li>height: Game board height in pixels on screen</li>
	</ul>
</p>
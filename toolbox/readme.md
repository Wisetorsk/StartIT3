# Toolbox
  
Collection of useful scripts written and made easily intagratable in other projects

## Cookies.js
  Cookie handler object to create, delete and interact with cookies through javascript.  
  Include using the following script tag.   
  ```html
<script type="text/javascript" src="cookies.js"></script>
```
#### Usage: 
```javascript
let handler = new Cookies(); 
```
To instance a new Cookie handler object.  
On load the handler will look up the active cookies in the page and store them in 
```javascript
handler.cookies;
```
To make or alter a cookie use the method "set"
```javascript
handler.set("CookieName", "CookieValue"); //Sets the cookie
```
To update the stored cookies in js memory, use the method "load". The "all" flag indicates if the handler should wipe it's stored memory of cookies before loading page cookies.
```javascript
handler.load(all=false); //Loads document.cookie into Cookies object
```
To remove ALL cookies in page:
```javascript
Cookies.remove();
```
To return a single cookie use the method "get"
```javascript
let cookieValue = handler.get("cookieName");
```
To view all stored cookies:
```javascript
handler.list();
```

## KeypressHandler.js
Keypress handler enables the user to set individual keys to trigger output in console/js.  
Following script tag includes the handler object  
```html
<script type="text/javascript" src="keypressHandler.js"></script>
```
#### Usage

Built in flavours of the keypress handler includes:
- WASD
- Letters
- Numbers
Instance the handler using
```js
let handler = new KeypressHandler();
```
If you want to instance a subclass of KeypressHandler, just use it's class name in the object assignement. i.e:
```js
let numberHandler = new Numbers();
let letterHandler = new Letters();
let directionHandler = new WASD();
```
When a key is pressed the handler returns the relative array for the pressed key. 
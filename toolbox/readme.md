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
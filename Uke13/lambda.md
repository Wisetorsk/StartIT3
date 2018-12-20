
# Hva er ett lambdauttrykk? 
Lambdauttrykk bygger på det som kalles for anonyme funksjoner i javascript. 
En lambdafunksjon (også kalt arrow function) kan også deklareres som ett objekt 
i likhet med en konvensjonell funksjon, men brukes oftest til anonyme funskjoner.

La oss skrive om disse funksjonene til ett lambdauttrykk:
```js
function pow(x, y) {
	return x**y;
}

function hello(name) {
    console.log('Hello, ' + name + '!');
}
```

Husk at funksjoner også kan defineres på denne måten: 
```js
let pow = function(x, y) {
	return x**y;
}

let hello = function(name) {
	console.log('Hello, ' + name + '!');
}
```

Hvis vi har ett program, eller en annen funksjon som skal ha en parameter når den kalles, 
kan vi fint gi denne funksjonen en ny funksjon som parameter
```js
function extendName(name) {
	return 'my name is: ' + name;
}

function greet(prefix) {
	console.log('Hello, ' + prefix)
}

greet('Geir'); // Gir svaret, Hello, Geir
extendName('Geir'); // my name is: Geir
```

Hvis vi konbinerer utrykkene får vi:

```js
greet(extendName('Geir')); // Gir svaret, Hello, my name is: Geir
```

Nå kan vi gå videre til anonyme funksjoner. Som du kanskje kan se i det tidligere uttrykket, 
kan vi skrive funksjonen inn direkte i kallet til "greet()" -funksjonen.
Det kan gjøres på denne måten:
```js
greet(function(name) {return 'my name is: ' + name; }('Geir')); // Legg merke til at vi her kaller den indre funksjonen ved å legge til ('Geir') etter vi har definert vår anonyme funksjon;
```

Ett lambdauttrykk er mer eller mindre det samme (egentlig ikke helt, men like nok) som en 
anonym funksjon når det brukes som en parameter til en annen funksjon.
Ett lambdauttrykk skrives ved å bruke såkalt "arrow notation". Da bruker vi en pil "=>" til 
å notere hva funksjonen skal returnere. Merk at vi ikke bruker variabler inne i utrykket.
```js
let pow = (x, y) => x ** y;

let hello = name => console.log('Hello ' + name + '!');
```
Det er viktig å bemerke at hvis vi kun skal ha en parameter, så trenger vi ikke skrive parentes rundt dem når vi skriver lambdauttrykket.

Nå kan vi demonstrere hvordan lambdauttrykk vanligvis brukes i f.eks funskjonell programmering.
```js
let arr = [...Array(100).keys()] // Denne kodebiten gir oss en array med tall fra null til 99.
```
Si at vi vil gjøre om denne arrayen til resultatet av tallet per index opphøyd i tallet to (eksponentiell / power).
Hvis vi vil gjøre det på gamlemåten må vi gå igjennom arrayet tall for tall og bruke funksjonen vår "pow" på den slik
```js
let newArray = [];
for (let i = 0; i < arr.length; i++) {
	newArray.push(pow(i, 2));
}
console.log(arr);
console.log(newArray);
```

Vi kan forenkle dette ved å bruke .map() og ett lambdauttrykk slik:
```js
let newArrayFunctional = arr.map(i => i**2);
console.log(newArray);
```


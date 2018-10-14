// JavaScript source code
function correct() {
    document.getElementById('Svarvindu').innerHTML = 'KORREKT!';
}
function feil(id) {
    document.getElementById('Svarvindu').innerHTML = 'FEIL';
    console.log(id);
}

/*  EVENT HANDLERS 2.0 
 *  */

function testOnLoad() {
    //document.getElementById('info').innerHTML += '<li>OnLoad</li>';
    console.log('OnLoad');
}

function testOnChange() { //Enter tast i input vindu
    //document.getElementById('info').innerHTML += '<li>OnChange</li>';
    console.log('OnChange');
}

function testOnInput() {
    //document.getElementById('info').innerHTML += '<li>OnInput</li>';
    console.log('OnInput');
}

function testOnMouseOver() {
    //document.getElementById('info').innerHTML += '<li>OnMouseOver</li>';
    console.log('OnMouseOver');
}

function testOnMouseOut() {
    //document.getElementById('info').innerHTML += '<li>OnMouseOut</li>';
    console.log('OnMouseOut');
}

function testOnDblClick() { //Dobbeltklikk
    console.log('OnDBLClick');
}

function testOnContextMenu() { //Høyreklikk
    console.log('OnContextMenu');
}

function testOnKeyDown() {
    console.log('OnKeyDown');
}

function testThis(element) {
    element.innerHTML = 'HAHAHAHAHAAH';
}

function reset() {
    document.getElementById('Test1').innerHTML = 'Test1';
    document.getElementById('Test2').innerHTML = 'Test2';
}
// text change
function textChange() {
	document.getElementById('h2').innerHTML="hello samia";
}





//show date

function showDate() {
	document.getElementById('d-h2').innerHTML=Date();
}


//bulb on/off

function bulbOn() {
	document.getElementById('img').src="images/on.gif";
}

function bulbOff() {
	document.getElementById('img').src="images/off.gif";
}
//fontchange

function fontChange() {

document.getElementById('f-c').style.fontSize='70px';
}
//show/hide
function show() {
document.getElementById('s-h2').style.display='block';
}

function hide() {

document.getElementById('s-h2').style.display='none';
}
//dwrite
function writeOutput() {



document.write('hello world');
}

//walert
function windowAlert() {
	window.alert('hlw world');
}
//clog

function clog() {
	console.log("hlw world");
}
//variable


var number1 = 10;
var number2 = 20;
var data = number1 + number2;

function vOutput() {
	document.getElementById('vh2').innerHTML=data;
}

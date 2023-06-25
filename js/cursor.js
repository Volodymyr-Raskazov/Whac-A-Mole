'use strict'
const cursor = document.addEventListener('cursor');

var mouseX = 0;
var mouseY = 0;

body.addEventListener('mousemove', e => {
	clientX = e.pageX;
	clientY = e.pageY;
	mouseCoords();
});

const mouseCoords = (e) => {
	mouseX = e.pageX;
	mouseY = e.pageY;
}
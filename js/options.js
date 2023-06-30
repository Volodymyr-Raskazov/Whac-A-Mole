'use strict'
let options = document.getElementById('options');
let usLangSw = document.getElementById('us');
let uaLangSw = document.getElementById('ua');
let soundOnSw = document.getElementById('on');
let soundOffSw = document.getElementById('off');
let levelEasy = document.getElementById('easy');
let levelHard = document.getElementById('hard');
let gameBoard = document.querySelector('.game');
let screen = document.querySelector('.wrapper');

let countdownText = 's left!';
let btnText = 'Start!';

options.addEventListener('click', () => {
	let optionsWindow = document.querySelector('.options-window');
	optionsWindow.classList.toggle('active');
});

usLangSw.addEventListener('click', () => {
	usLangSw.classList.add('active');
	uaLangSw.classList.remove('active');
	countdownText = 's left!';
	btnText = 'Start!';
	document.querySelector('body').style.fontFamily = '"Shadows Into Light", cursive';
	document.querySelector('.title h1').textContent = 'Whack-a-mole!';
	document.querySelector('.title div').textContent = 'your score: ';
	document.querySelector('.start button').textContent = 'Start!';
	document.querySelector('.start button').style.padding = '0 15px';
	document.querySelector('.options-window h2').textContent = 'Options';
	document.querySelector('.lang h3').textContent = 'Select language:';
	document.querySelector('.sound h3').textContent = 'Sound on/off:';
	document.querySelector('.level h2').textContent = 'Difficulty level';
	document.querySelector('#easy').innerHTML = 'Easy<span class="active-txt"></span>';
	document.querySelector('#hard').innerHTML = 'Hard<span class="active-txt"></span>';
});

uaLangSw.addEventListener('click', () => {
	usLangSw.classList.remove('active');
	uaLangSw.classList.add('active');
	countdownText = 'с до кінця!';
	btnText = 'Вперед!';
	document.querySelector('body').style.fontFamily = 'Caveat, cursive';
	document.querySelector('.title h1').textContent = 'Бий крота!';
	document.querySelector('.title div').textContent = 'твій рахунок: ';
	document.querySelector('.start button').textContent = 'Вперед!';
	document.querySelector('.start button').style.padding = '8px 15px';
	document.querySelector('.options-window h2').textContent = 'Параметри';
	document.querySelector('.lang h3').textContent = 'Обери мову:';
	document.querySelector('.sound h3').textContent = 'Звук увім./вим.:';
	document.querySelector('.level h2').textContent = 'Рівень складності';
	document.querySelector('#easy').innerHTML = 'Легко<span class="active-txt"></span>';
	document.querySelector('#hard').innerHTML = 'Складно<span class="active-txt"></span>';
});

soundOnSw.addEventListener('click', () => {
	soundOnSw.classList.add('active');
	soundOffSw.classList.remove('active');
	muted = false;
});

soundOffSw.addEventListener('click', () => {
	soundOnSw.classList.remove('active');
	soundOffSw.classList.add('active');
	muted = true;
});

levelEasy.addEventListener('click', () => {
	levelHard.classList.remove('active');
	levelEasy.classList.add('active');
	createHolesEasy();
});

levelHard.addEventListener('click', () => {
	levelHard.classList.add('active');
	levelEasy.classList.remove('active');
	createHolesHard();
});

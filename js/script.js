'use strict'
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const boom = document.querySelector('.boom');

let lastHole;
let timeUp = false;
let score = 0;

const playSound = (soundFile, volume) => {
	let sound = new Audio(soundFile);
	sound.volume = volume;
	sound.play();
}

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	if (hole === lastHole) {
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
}

function peep() {
	const time = randomTime(200, 1000);
	// const time = randomTime(1000, 2000);
	const hole = randomHole(holes);
	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) peep();
	}, time);
}

function countdown() {
	let t = 10;
	startBtn.textContent = `${t}s left`;
	let timerID = setInterval(() => {
		t--;
		startBtn.textContent = `${t}s left`;
		if (t == 0) {
			startBtn.textContent = `Start!`;
			clearInterval(timerID);
		}
	}, 1000);
}

function startGame() {
	scoreBoard.textContent = 0;
	timeUp = false;
	score = 0;
	peep();
	countdown();
	setTimeout(() => {
		timeUp = true
	}, 10000);
}

function whack(e) {
	if (!e.isTrusted) return;
	score++;
	scoreBoard.textContent = score;
	playSound('sound/boom.mp3', 0.2);
	boom.style.display = 'block';
	boom.style.top = this.offsetParent.offsetTop + 'px';
	boom.style.left = this.offsetParent.offsetLeft + 'px';
	setTimeout(() => {
		boom.style.display = 'none';
		this.parentNode.classList.remove('up');
	}, 100);
}

moles.forEach(mole => mole.addEventListener('click', whack));
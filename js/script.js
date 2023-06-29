'use strict'
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.getElementById('score');
const moles = document.querySelectorAll('.mole');
const boom = document.querySelector('.boom');

let lastHole;
let timeUp = false;
let score = 0;
let muted = false;
let duration = 20000;

const playSound = (soundFile, volume, muted) => {
	const sound = new Audio(soundFile);
	sound.volume = volume;
	sound.muted = muted;
	sound.play();
}

const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);

const randomHole = (holes) => {
	let idx;
	let hole;
	do {
		idx = Math.floor(Math.random() * holes.length);
		hole = holes[idx];
	} while (hole === lastHole);
	lastHole = hole;
	return hole;
}

const peep = () => {
	if (!timeUp) {
		const time = randomTime(300, 1000);
		const hole = randomHole(holes);
		hole.classList.add('up');
		playSound('sound/haha-1.mp3', 0.1, muted);
		setTimeout(() => {
			hole.classList.remove('up');
			peep();
		}, time);
	}
}

const countdown = () => {
	let time = duration / 1000;
	startBtn.textContent = time + countdownText;
	const timerId = setInterval(() => {
		time--;
		startBtn.textContent = time + countdownText;
		if (time === 0) {
			startBtn.textContent = btnText;
			clearInterval(timerId);
		}
	}, 1000);
}

const startGame = () => {
	resetScoreBoard();
	setTimeUpFlag();
	setScoreToZero();
	peep();
	countdown();
	setTimeoutForGameEnd();
}

const resetScoreBoard = () => {
	scoreBoard.textContent = 0;
}
const setTimeUpFlag = () => {
	timeUp = false;
}
const setScoreToZero = () => {
	score = 0;
}
const setTimeoutForGameEnd = () => {
	document.querySelector('.start button').disabled = true;
	setTimeout(() => {
		timeUp = true;
		document.querySelector('.start button').disabled = false;
	}, duration);
}

function whack(e) {
	if (!e.isTrusted) return;

	// Update the score
	score++;
	scoreBoard.textContent = score;

	// Play the sound
	playSound('sound/boom-1.mp3', 0.4, muted);

	// Show the boom effect
	boom.style.display = 'block';
	boom.style.top = this.offsetParent.offsetTop + 'px';
	boom.style.left = this.offsetParent.offsetLeft + 'px';

	// Hide the boom effect after 100ms
	setTimeout(() => {
		boom.style.display = 'none';
		this.parentNode.classList.remove('up');
	}, 100);
}

moles.forEach(mole => mole.addEventListener('click', whack));
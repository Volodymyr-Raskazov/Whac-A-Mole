'use strict'

function playSound(soundFile, volume, muted) {
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

const randomMoleSwitchToBonus = () => {
	let idx;
	let mole;
	idx = Math.floor(Math.random() * moles.length);
	mole = moles[idx];
	mole.classList.add('bonus');
}

const peep = () => {
	if (!timeUp) {
		const time = randomTime(1000, 1000);
		const hole = randomHole(holes);
		hole.classList.add('up');
		playSound('sound/haha-1.mp3', 0.1, muted);
		setTimeout(() => {
			hole.classList.remove('up');
			peep();
		}, time);
	}
}

const countdown = (duration) => {
	let time = duration / 1000;
	let lastTime = time;
	console.dir(time);
	console.dir(lastTime);
	if (lastTime < time) {
		clearInterval(timerId);
		timerId();
	};
	const timerId = setInterval(() => {
		startBtn.textContent = time + countdownText;
		time--;
		if (time === 0) {
			startBtn.textContent = btnText;
			clearInterval(timerId);
		}
	}, 1000);
}

const startGame = () => {
	resetScoreBoard();
	setScoreToZero();
	setTimeUpFlag();
	peep();
	setTimeoutForGameEnd(duration);
	// countdown(duration);
	randomMoleSwitchToBonus();
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
const increaseDuration = (duration) => {
	duration += 5000; // Додати 5000 мілісекунд (5 секунд)
	setTimeoutForGameEnd(duration);
}
const setTimeoutForGameEnd = (duration) => {
	document.querySelector('.start button').disabled = true;
	setTimeout(() => {
		timeUp = true;
		document.querySelector('.start button').disabled = false;
	}, duration);
	countdown(duration);
}

function whack(e) {
	if (!e.isTrusted) return;

	if (this.classList.contains('bonus')) {
		this.classList.remove('bonus');
		increaseDuration(duration);
		randomMoleSwitchToBonus();
	} else {
		// Update the score
		score++;
		scoreBoard.textContent = score;
	}
	// Play the sound
	playSound('sound/boom-1.mp3', 0.4, muted);
	this.parentNode.classList.remove('up');

	// Show the boom effect
	boom.style.display = 'block';
	boom.style.top = this.offsetParent.offsetTop + 'px';
	boom.style.left = this.offsetParent.offsetLeft + 'px';

	// Hide the boom effect after 100ms
	setTimeout(() => {
		boom.style.display = 'none';
	}, 200);
}

moles.forEach(mole => mole.addEventListener('click', whack));
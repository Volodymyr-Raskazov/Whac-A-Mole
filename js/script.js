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
		const time = randomTime(300, 900);
		const hole = randomHole(holes);
		hole.classList.add('up');
		if (hole.lastElementChild.classList.contains('bonus')) {
			playSound('sound/tik-tak.mp3', 0.2, muted);
		} else {
			playSound('sound/haha-1.mp3', 0.1, muted);
		}

		setTimeout(() => {
			hole.classList.remove('up');
			peep();
		}, time);
	}
}

const startGame = () => {
	resetGame();
	peep();
	setTimeoutForGameEnd(duration);
	randomMoleSwitchToBonus();
}

const resetGame = () => {
	resetScoreBoard();
	setTimeUpFlag();
	setScoreToZero();
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
	clearInterval(intervalId);
	clearTimeout(timeoutId);
	duration += 5000; // Додати 5000 мілісекунд (5 секунд)
	setTimeoutForGameEnd(duration);
}

const setTimeoutForGameEnd = (duration) => {
	document.querySelector('.start button').disabled = true;
	timeLeft = duration / 1000;
	intervalId = setInterval(() => {
		startBtn.textContent = timeLeft + countdownText;
		timeLeft--;
		if (timeLeft === 0) {
			startBtn.textContent = btnText;
			clearInterval(intervalId);
		}
	}, 1000);
	timeoutId = setTimeout(() => {
		timeUp = true;
		document.querySelector('.start button').disabled = false;
	}, duration);
}

function whack(e) {
	if (!e.isTrusted) return;

	if (this.classList.contains('bonus')) {
		playSound('sound/bonus.mp3', 0.6, muted);
		boom.style.backgroundImage = 'url(img/wow.png)';
		this.classList.remove('bonus');
		randomMoleSwitchToBonus();
		increaseDuration(timeLeft * 1000);
	} else {
		playSound('sound/boom-1.mp3', 0.4, muted);
		boom.style.backgroundImage = 'url(img/boom-1.png)';
		score++;
		scoreBoard.textContent = score;
	}
	boom.style.display = 'block';
	boom.style.top = this.offsetParent.offsetTop + 'px';
	boom.style.left = this.offsetParent.offsetLeft + 'px';
	this.parentNode.classList.remove('up');

	setTimeout(() => {
		boom.style.display = 'none';
	}, 200);
}

moles.forEach(mole => mole.addEventListener('click', whack));
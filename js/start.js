'use strict'

const createHolesEasy = () => {
	game.innerHTML = '';
	let flex = '1 0 33%';
	let size = '37%';
	let n = 9;
	if (screen.offsetWidth <= 768 && screen.offsetWidth > 425) {
		flex = '1 0 30%';
		size = '52%'
	} else if (screen.offsetWidth <= 425) {
		flex = '1 0 48%';
		size = '42%'
		n = 8;
	}
	for (let i = 1; i <= n; i++) {
		let addHole = document.createElement('div');
		addHole.className = `hole hole${i}`;
		addHole.innerHTML = `<div class="mole"></div>`;
		game.appendChild(addHole);
	}
	holes = document.querySelectorAll('.hole');
	holes.forEach((el) => {
		el.style.flex = flex;
	});
	moles = document.querySelectorAll('.mole');
	moles.forEach((el) => {
		el.style.backgroundSize = size;
		el.addEventListener('click', whack);
	});
}

const createHolesHard = () => {
	game.innerHTML = '';
	let flex = '1 0 25%';
	let size = '50%';
	if (screen.offsetWidth <= 768 && screen.offsetWidth > 425) {
		size = '45%'
	} else if (screen.offsetWidth <= 425) {
		flex = '1 0 48%';
		size = '37%';
	}
	for (let i = 1; i <= 12; i++) {
		let addHole = document.createElement('div');
		addHole.className = `hole hole-${i}`;
		addHole.innerHTML = `<div class="mole"></div>`;
		game.appendChild(addHole);
	}
	holes = document.querySelectorAll('.hole');
	holes.forEach((el) => {
		el.style.flex = flex;
	});
	moles = document.querySelectorAll('.mole');
	moles.forEach((el) => {
		el.style.backgroundSize = size;
		el.addEventListener('click', whack);
	});
}

createHolesEasy();
'use strict';

const mouseMove = (e) => {
	const { clientX: x, clientY: y } = e;
	cursor.style.left = `${x}px`;
	cursor.style.top = `${y}px`;
};

if ('maxTouchPoints' in navigator && navigator.maxTouchPoints === 0) {
	document.addEventListener('mousemove', mouseMove);
	holes.forEach((hole) => {
		hole.addEventListener('click', () => {
			cursor.classList.add('animate');
			setTimeout(() => {
				cursor.classList.remove('animate');
			}, 100);
		});
	});
	game.addEventListener('mouseover', () => {
		cursor.style.display = 'block';
		cursor.style.height = '80px';
		cursor.style.width = '80px';
		cursor.style.backgroundImage = 'url(img/humm.png)';
	});
	game.addEventListener('mouseout', () => {
		cursor.style.display = 'none';
	});
	startBtn.addEventListener('mouseover', () => {
		cursor.style.display = 'block';
		cursor.style.height = '40px';
		cursor.style.width = '40px';
		cursor.style.backgroundImage = 'url(img/cursor.png)';
	});
	startBtn.addEventListener('mouseout', () => {
		cursor.style.display = 'none';
	});
}
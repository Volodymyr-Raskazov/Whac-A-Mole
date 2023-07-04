'use strict'

options.addEventListener('click', () => {
	const optionsWindow = document.querySelector('.options-window');
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

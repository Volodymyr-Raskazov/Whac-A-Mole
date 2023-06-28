let screen = document.querySelector('.wrapper');

if (screen.offsetWidth < 700) {
	let board = document.querySelector('.game');
	board.innerHTML = `<div class="hole hole1">
	<div class="mole"></div>
	</div>
	<div class="hole hole2">
	<div class="mole"></div>
	</div>
	<div class="hole hole3">
	<div class="mole"></div>
	</div>
	<div class="hole hole4">
	<div class="mole"></div>
	</div>
	<div class="hole hole5">
	<div class="mole"></div>
	</div>
	<div class="hole hole6">
	<div class="mole"></div>
	</div>
	<div class="hole hole7">
	<div class="mole"></div>
	</div>
	<div class="hole hole8">
	<div class="mole"></div>
	</div>`
} else {
	board.innerHTML = `<div class="hole hole1">
	<div class="mole"></div>
	</div>
	<div class="hole hole2">
	<div class="mole"></div>
	</div>
	<div class="hole hole3">
	<div class="mole"></div>
	</div>
	<div class="hole hole4">
	<div class="mole"></div>
	</div>
	<div class="hole hole5">
	<div class="mole"></div>
	</div>
	<div class="hole hole6">
	<div class="mole"></div>
	</div>
	<div class="hole hole7">
	<div class="mole"></div>
	</div>
	<div class="hole hole8">
	<div class="mole"></div>
	</div>
	<div class="hole hole9">
	<div class="mole"></div>
	</div>
	<div class="hole hole10">
	<div class="mole"></div>
	</div>
	<div class="hole hole11">
	<div class="mole"></div>
	</div>
	<div class="hole hole12">
	<div class="mole"></div>
	</div>`
}


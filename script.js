const box = document.querySelector('.box')
const speedBtns = document.querySelectorAll('[data-setting="speed"]')
const colorBtns = document.querySelectorAll('[data-setting="color"]')
const slider = document.querySelector('#slider')
const sliderInfo = document.querySelector('.slider-info')

const squares = 346
let sliderValue = 70
let range = 360
const createSquares = speed => {
	box.innerHTML = ''

	for (let i = 0; i < squares; i++) {
		const square = document.createElement('div')
		square.classList.add('square')
		square.style.transitionDuration = speed

		square.addEventListener('mouseover', () => setColor(square))

		square.addEventListener('mouseout', () => removeColor(square))

		box.appendChild(square)
	}
}



const setColor = square => {
	let h

	if (range === 360) {
		h = Math.floor(Math.random() * 360)
	} else {
		h = Math.floor(Math.random() * 60) + range
	}

	const s = slider.value + '%'
	const l = '50%'

	square.style.backgroundColor = `hsl(${h}, ${s}, ${l})`
}

const removeColor = square => {
	square.style.backgroundColor = 'transparent'
}

function handleSpeed() {
	const newSpeed = this.dataset.speed + 's'
	createSquares(newSpeed)
}

function handleColorRange() {
	range = parseInt(this.dataset.colorRange) 
}

const showSliderInfo = () =>{
	sliderValue = slider.value
	sliderInfo.textContent = slider.value
}


speedBtns.forEach(btn => btn.addEventListener('click', handleSpeed))
colorBtns.forEach(btn => btn.addEventListener('click', handleColorRange))
slider.addEventListener('mousemove', showSliderInfo)
createSquares()
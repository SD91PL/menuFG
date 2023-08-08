let addBtn

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {

	addBtn = document.querySelector('.btn-add')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', clickedBtn)
}

const clickedBtn = () => {
    addBtn.classList.toggle('clicked')
}

document.addEventListener('DOMContentLoaded', main)

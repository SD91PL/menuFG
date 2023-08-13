let navInfo
let def
let bts
let repo
let mockup

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	navInfo = document.querySelector('.nav-info')
	def = document.querySelector('.default')
	bts = document.querySelector('.bootstrap')
	repo = document.querySelector('.repo')
	mockup = document.querySelector('.mockup')
}

const prepareDOMEvents = () => {
	def.addEventListener('mouseover', hoverDef)
}

const hoverDef = () => {
    console.log('test');
}

document.addEventListener('DOMContentLoaded', main)

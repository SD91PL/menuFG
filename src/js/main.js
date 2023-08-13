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
	bts.addEventListener('mouseover', hoverBts)
	repo.addEventListener('mouseover', hoverRepo)
	mockup.addEventListener('mouseover', hoverMockup)

    def.addEventListener('mouseleave', hoverOut)
    bts.addEventListener('mouseleave', hoverOut)
    repo.addEventListener('mouseleave', hoverOut)
    mockup.addEventListener('mouseleave', hoverOut)
}

const hoverDef = () => {
    navInfo.textContent = 'A default version of the site - without Bootstrap'
}

const hoverBts = () => {
    navInfo.textContent = 'A version of the website developed using Bootstrap v5.3'
}

const hoverRepo = () => {
    navInfo.textContent = 'Full repository for creating both versions of the website'
}

const hoverMockup = () => {
    navInfo.textContent = 'A mock-up based on which the websites were made'
}

const hoverOut = () => {
    navInfo.textContent = 'Place the cursor for more information'
}

document.addEventListener('DOMContentLoaded', main)

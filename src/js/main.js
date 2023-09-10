let navInfo
let def
let defBEM
let bts
let repo
let repoACR
let mockup

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	navInfo = document.querySelector('.nav-info')
	def = document.querySelector('.default')
	defBEM = document.querySelector('.default-bem')
	bts = document.querySelector('.bootstrap')
	repo = document.querySelector('.repo')
	repoACR = document.querySelector('.repo-acr')
	mockup = document.querySelector('.mockup')
}

const prepareDOMEvents = () => {
	def.addEventListener('mouseover', hoverDef)
	defBEM.addEventListener('mouseover', hoverDefBEM)
	bts.addEventListener('mouseover', hoverBts)
	repo.addEventListener('mouseover', hoverRepo)
	repoACR.addEventListener('mouseover', hoverRepoACR)
	mockup.addEventListener('mouseover', hoverMockup)

    def.addEventListener('mouseleave', hoverOut)
    defBEM.addEventListener('mouseleave', hoverOut)
    bts.addEventListener('mouseleave', hoverOut)
    repo.addEventListener('mouseleave', hoverOut)
    repoACR.addEventListener('mouseleave', hoverOut)
    mockup.addEventListener('mouseleave', hoverOut)
}

const hoverDef = () => {
    navInfo.textContent = 'A default version of the site - without Bootstrap'
}

const hoverDefBEM = () => {
    navInfo.textContent = 'Latest, fixed version of the default site, now with BEM classes - after Code Review'
}

const hoverBts = () => {
    navInfo.textContent = 'A version of the website developed using Bootstrap v5.3'
}

const hoverRepo = () => {
    navInfo.textContent = 'Full repository for creating both versions of the website - before Code Review'
}

const hoverRepoACR = () => {
    navInfo.textContent = 'Repository of the fixed default site with BEM classes - after Code Review'
}

const hoverMockup = () => {
    navInfo.textContent = 'A mock-up based on which the websites were made'
}

const hoverOut = () => {
    navInfo.textContent = 'Place the cursor for more information'
}

document.addEventListener('DOMContentLoaded', main)

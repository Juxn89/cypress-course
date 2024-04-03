describe('Waiting for elements', () => {
	beforeEach(() => {
		cy.visit('https://www.platzi.com')
	})

	it('Wait for a defined time', () => {
		cy.wait(500)
	})

	it('Wait for a specific element', () => {
		cy.get('.Button-module_Button__Y5dbR', { timeout: 6000 })
	})

	it('Wait for a specific element and make a assertion', () => {
		cy.get('.Button-module_Button__Y5dbR', { timeout: 6000 }).should('be.visible')
	})
})

describe('Waiting for element in Demoqa site', () => {
	beforeEach('', () => {
		cy.visit('/')
	})

	it('Disable the retry option', () => {
		// cy.get('.banner-image', { timeout: 5000 })
		cy.get('.banner-image', { timeout: 0 }) // Disable retry
	})
})
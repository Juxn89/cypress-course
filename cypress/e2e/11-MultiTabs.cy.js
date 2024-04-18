describe('Navigate between tabs', () => {
	Cypress.on('uncaught:exception', (error, runnable) => false)

	it('Visit links with target in _blank', () => {
		cy.visit('https://demoqa.com/links')
		cy.get('#simpleLink').click()
	})

	it.only('Open the page in the same windows', () => {
		cy.visit('https://demoqa.com/links')
		cy.get('#simpleLink').invoke('removeAttr', 'target').click()

	})
})
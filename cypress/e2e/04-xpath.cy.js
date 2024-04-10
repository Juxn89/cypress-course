describe('Working with xpaths', () => {
	it('Get element with CSS selector', () => {
		cy.visit('/')
		cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1')
			.should('contain', 'Bulbasaur')
	})

	it('Get element with xpath', () => {
		cy.visit('/')
		cy.xpath('//h1[contains(text(), "Bulbasaur")]')
			.should('contain', 'Bulbasaur')
	})
	
	it('Get element with Cypress', () => {
		cy.visit('/')
		cy.contains('Bulbasaur').should('be.visible')
	})
})
describe('Flaky test', () => {
	it('Single query command', () => {
		cy.visit('/')
		// cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1')
		// .should('contain', 'Bulbasaaaaaaaur')

		cy.contains(
			'#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1',
			'Bulbasaur'
		)
	})

	it('Alter commands with asserts', () => {
		cy.visit('/')

		// cy.get('#submit').should('not.be.disabled').click()

		cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1')
			.should('contain', 'Bulbasaur')
			.parent()
			.should('have.class', 'card-header')
	})
})
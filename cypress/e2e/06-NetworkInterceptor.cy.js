describe('Intercepting network requests', () => {
	Cypress.on('uncaught:exception', (error, runnable) => false)

	it('Brush up the request', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/mewtwo')
			.then(response => {
				expect(response.body).to.have.property('name', 'mewtwo')
				expect(response.status).to.eq(200)

				cy.log(response.body)
			})
	})

	it('Simple interception test', () => {
		cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon-species/6')
			.as('charizard')

		cy.visit('/')

		cy.contains('Charizard')
			.parent()
			.parent()
			.within(element => {
				cy.wrap(element).contains('Más detalles').click()
			})
		
		cy.wait('@charizard')
			.then(interception => {
				cy.log(interception)

				expect(interception.response.body).to.have.property('name', 'charizard')
				expect(interception.response.statusCode).to.eq(200)
			})

		// cy.wait('@charizard')
		// 	.its('response.statusCode')
		// 	.should('eq', 200)
	})
})
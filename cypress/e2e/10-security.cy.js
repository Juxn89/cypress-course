let label;

describe('Security', () => {
	it('Browse between differents domains', () => {
		cy.visit('/')
		cy.visit('https://todo-cypress-iota.vercel.app')
		cy.get('#title').type('Test title')
	})

	it('Navigate to a domain', function() {
		cy.visit('https://todo-cypress-iota.vercel.app')
		cy.get('h1').invoke('text').as('title')
	})

	it('Navigate to another domain', function() {
		cy.visit('https://todo-cypress-iota.vercel.app')
		cy.log(this.title)
	})

	it.only('Navigate between 2 domains in the same test', () => {
		cy.visit('/')
		cy.get('h1').first().invoke('text').then((text) => {
			label = text
			Cypress.env({ envLabel: text })
		})

		cy.origin(
			'https://todo-cypress-iota.vercel.app', 
			{ args: { label } }, 
			function({ label }) {
				cy.visit('/')
				cy.log(label)
				cy.log(Cypress.env())
			}
		)

		cy.visit('/')
		cy.get('h1').first().invoke('text').should('equal', Cypress.env('envLabel'))
	})
})
describe('Security', () => {
	it('Browse between differents domains', () => {
		cy.visit('/')
		cy.visit('https://todo-cypress-iota.vercel.app')
		cy.get('#title').type('Test title')
	})

	it.only('Navigate to a domain', function() {
		cy.visit('https://todo-cypress-iota.vercel.app')
		cy.get('h1').invoke('text').as('title')
	})

	it.only('Navigate to another domain', function() {
		cy.visit('https://todo-cypress-iota.vercel.app')
		cy.log(this.title)
	})
})
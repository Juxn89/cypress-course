describe('Visual testing', () => {
	it('First regression test', () => {
		cy.visit('/')
		cy.wait(1000)
		cy.scrollTo('bottom')
		// cy.wait(3000)

		cy.matchImageSnapshot()		
	})

	it('Second test to one element', () => {
		cy.visit('/')
		cy.contains('Bulbasaur').should('be.visible').matchImageSnapshot()
	})
})
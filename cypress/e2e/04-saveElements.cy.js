describe('Saving elements', () => {
	Cypress.once('uncaught:exception', (err, runnable) => false)

	it('Repetition', () => {
		cy.visit('/automation-practice-form')
		// Get parent element
		cy.get('input[placeholder="First Name"]').parents('form').then( (form) => {
			const inputs = form.find('input')
			const divs = form.find('div')
			const labels = form.find('label')

			expect(inputs.length).to.eq(15)
			cy.wrap(inputs).should('have.length', 15)

			expect(divs.length).to.eq(70)
			expect(labels.length).to.eq(16)

			// DEBUG
			cy.task('log', inputs.length)
			cy.log(`I'm the length ${inputs.length}`)
			cy.pause()
		})
		
		cy.get('form').find('label')
		cy.debug()

		cy.get('input[placeholder="First Name"]').then(console.log)
	})
})
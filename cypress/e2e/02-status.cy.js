describe('Testing statu code', () => {
	it('Validate status code successfully', () => {
		cy.request('employees')
			.its('status')
			.should('eq', 200)
	})

	it('Validate failed status code', () => {
		cy.request({ url: 'employees/5', failOnStatusCode: false })
			.its('status')
			.should('eq', 404)
	})
})
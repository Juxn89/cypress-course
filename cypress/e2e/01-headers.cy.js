describe('Testing headers', () => {
	it('Validate header and content type', () => {
		cy.request('employees').its('headers').its('content-type').should('include', 'application/json')
	});
})
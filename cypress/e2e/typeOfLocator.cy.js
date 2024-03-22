describe('Types of locators', () => {
	Cypress.once('uncaught:exception', (err, runnable) => false);

  it('Get element by tag', () => {
    cy.visit('/automation-practice-form')
    cy.get('input')
  })

	it('Get element by ID', () => {
    cy.get('#firstName')
	})
	
	it('Get element by attribute', () => {
    cy.get('[placeholder="First Name"]')
	})
	
	it('Get element by attribute and tag', () => {
		cy.get('input[placeholder="First Name"]')
	})
	
	it('Get element by classname', () => {
		cy.get('.mr-sm-2.form-control')
	})
})

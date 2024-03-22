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

	it('Using contain', () => {
		cy.contains('Reading')
		cy.contains('.header-wrapper', 'Widgets')
	})

	it('Using parent', () => {
		// Get parent element
		cy.get('input[placeholder="First Name"]').parent()
		
		// Get parent elements
		cy.get('input[placeholder="First Name"]').parents()
		
		// Get parent elements
		cy.get('input[placeholder="First Name"]').parents().find('label')

		cy.get('form').find('label')
	})
})

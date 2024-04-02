describe('Assertions', () => {
	Cypress.once('uncaught:exception', (err, runnable) => false)

	before(() => {
		cy.visit('/automation-practice-form')
	})
	
	beforeEach(() => {
		// cy.visit('/automation-practice-form')
	})

	after(() => {
		cy.visit('/')
	})

	it('Assertion #1', () => {
		cy.url().should('include', 'demoqa.com')
		cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name')
	})

	it('Assertion #2', () => {
		cy.url().should('include', 'demoqa.com')
		cy.get('#firstName').then( (element) => {
			expect(element).to.be.visible
			expect(element).to.have.attr('placeholder', 'First Name')
		})
	})

	it.only('Assertion #3', () => {
		cy.url().should('include', 'demoqa.com')
		cy.get('#firstName').then( (element) => {
			assert.equal(element.attr('placeholder'), 'First Name')
		})
	})
})
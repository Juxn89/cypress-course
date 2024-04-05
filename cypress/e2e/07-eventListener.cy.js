describe('Event listener in elements', () => {
	Cypress.once('uncaught:exception', (error, runnable) => false)

	it('Click', () => {
		cy.visit('/buttons')
		cy.get('button').eq(3).click()
		cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have done a dynamic click')
	})

	it('Double Click', () => {
		cy.get('#doubleClickBtn').dblclick()
		cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click')
	})

	it('Right Click', () => {
		cy.get('#rightClickBtn').rightclick()
		cy.get('#rightClickMessage').should('be.visible').and('contain', 'You have done a right click')
	})

	it('Force Click', () => {
		cy.visit('/dynamic-properties')
		// cy.get('#enableAfter').click({ timeout: 0 })
		cy.get('#enableAfter').click({ timeout: 0, force: true })
	})

	it('Click by possition', () => {
		cy.visit('/buttons')
		cy.get('button').eq(3).parent().parent().click('topRight')
		cy.get('button').eq(3).parent().parent().click('bottomLeft')
		cy.get('button').eq(3).parent().parent().click(5, 60)
	})	
	
	it('Input type text', () => {
		cy.visit('/automation-practice-form')
		cy.get('#firstName').type('Juan')
		cy.get('#lastName').type('Gomez')
		
		cy.get('#firstName').type('{selectAll}{backspace}')
		cy.get('#firstName').type('Carlos')
		cy.get('#firstName').clear()
	})	
	
	it.only('Checkbox and radio buttons', () => {
		cy.visit('/automation-practice-form')
		// cy.get('#gender-radio-1').click({ force: true })
		// cy.get('#gender-radio-1').check({ force: true })
		cy.get('label[for="gender-radio-1"]').click()

		// cy.get('#hobbies-checkbox-1').click({ force: true})
		// cy.get('#hobbies-checkbox-1').check({ force: true})
		// cy.get('#hobbies-checkbox-1').check({ force: true})
		// cy.get('#hobbies-checkbox-1').uncheck({ force: true})

		cy.get('label[for="hobbies-checkbox-1"]').click()
	})
})
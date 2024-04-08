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
	
	it('Checkbox and radio buttons', () => {
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
	
	it('Get information from inputs', function() {
		cy.visit('/automation-practice-form')

		cy.get('#firstName').as('firstName')
		cy.get('@firstName').type('Juan')
		cy.get('@firstName').then((firstName) => {
			expect(firstName.val()).to.equal('Juan')
		})

		cy.get('@firstName').invoke('val').should('equal', 'Juan')
		cy.get('@firstName').invoke('val').as('globalFirstName')
	})	
	
	it('Share information', function() {
		cy.get('#lastName').as('lastName')
		cy.get('@lastName').type(this.globalFirstName)
	})
	
	it('Working with dropdown/select elements', () => {
		cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
		cy.get('select').select(2) // Select by index
		cy.get('select').select('audi').should('have.value', 'audi') // Select by value
		cy.get('select').select('Saab').should('have.value', 'saab') // Select by text

	})

	it('Working with dropdown/select elements - dynamic', () => {
		cy.visit('https://react-select.com/home')
		cy.get('#react-select-6-input').type(' ')
		cy.get('#react-select-6-listbox')
			.children()
			.contains('Red')
			.click()
	})

	it.only('Working with tables', () => {
		cy.visit('https://www.w3schools.com/html/html_tables.asp')
		cy.get('#customers').find('th').each(element => {
			cy.log(element.text())
		})

		cy.get('#customers')
			.find('th')
			.first()
			.invoke('text')
			.should('equal', 'Company')

		cy.get('#customers')
			.find('th')
			.eq(1) // Column index
			.invoke('text')
			.should('equal', 'Contact')

		cy.get('#customers')
			.find('th')
			.eq(2)
			.invoke('text')
			.should('equal', 'Country')

		cy.get('#customers')
			.find('tr')
			.should('have.length', 7)

		cy.get('#customers')
			.find('tr')
			.eq(2)
			.find('td')
			.eq(1)
			.invoke('text')
			.should('equal', 'Francisco Chang')
	})
})
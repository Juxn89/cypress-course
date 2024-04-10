describe('Cookies', () => {
	it('Get cookies', () => {
		cy.visit('/')
		cy.getCookies().should('be.empty')
	})

	it('Add cookie', () => {
		cy.setCookie('myCookie', 'Value of the cookie')
		cy.getCookies().should('have.length', 1)
	})

	it('Get a specific Cookie', () => {
		cy.setCookie('myCookie', 'Value of the cookie')
		cy.getCookie('myCookie').should('have.a.property', 'value', 'Value of the cookie')
	})
})
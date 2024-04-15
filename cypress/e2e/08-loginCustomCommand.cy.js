describe('Login with custom command', () => {
	it('Wrong login', () => {
		cy.login('wrong_username', 'wrong_password')
	})

	it('Success login', () => {
		cy.login('username', 'password')
	})
})

import { loginPage } from '../PageObjects/LoginPage'
describe('Login with POM', () => {
	Cypress.on('uncaught:exception', (error, runnable) => true)
	
	beforeEach(() => {
		loginPage.visit()
	})

	it('Wrong login', () => {
		loginPage.validateLoginPage()
		loginPage.login('invalid_user', 'invalid_password')
		loginPage.validateErrorLogin()
	})
	
	it('Success login', () => {
		loginPage.validateLoginPage()
		loginPage.login('username', 'password')
		loginPage.validateSuccessLogin()
	})

	it('Success login with Cy.env', () => {
		loginPage.validateLoginPage()
		cy.log(Cypress.env())

		loginPage.login(Cypress.env("credentials").user, Cypress.env("credentials").password)
		loginPage.validateSuccessLogin()
	})

	it('Success login with Cy.json', () => {
		loginPage.validateLoginPage()
		cy.log(Cypress.env())

		loginPage.login(Cypress.env("credentials").user, Cypress.env("credentials").password)
		loginPage.validateSuccessLogin()
	})

	it('Wrong login from terminal', () => {
		loginPage.validateLoginPage()
		cy.log(Cypress.env())

		const { user, password } = Cypress.env("credentials")

		loginPage.login(user, password)
		loginPage.validateSuccessLogin()
	})
})

describe.only('Wrong login with configuration', { env: { wrongUser: 'aaa', wrongPassword: 'bbb' } }, () => {
	beforeEach(() => {
		loginPage.visit()
	})

	it('Wrong login', () => {
		loginPage.validateLoginPage()
		cy.log(Cypress.env())

		const { wrongUser, wrongPassword } = Cypress.env()
		loginPage.login(wrongUser, wrongPassword)
		loginPage.validateErrorLogin()
	})
})
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

describe('Wrong login with configuration', { env: { wrongUser: 'aaa', wrongPassword: 'bbb' } }, () => {
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

describe('Login with fixture', () => {
	beforeEach(() => {
		loginPage.visit()
	})

	it('Wrong login', () => {
		loginPage.validateLoginPage()
		cy.fixture("credentials").then(credentials => {
			const { email, password } = credentials
			loginPage.login(email, password)
		})

		loginPage.validateErrorLogin()
	})

	it('Success login', () => {
		loginPage.validateLoginPage()
		cy.fixture('users').then(credentials => {			
			const { email, password } = credentials
			loginPage.login(email, password)
		})

		loginPage.validateSuccessLogin()
	})
})

const usersCredentials = [
	{ name: 'credentials', title: 'Login with credentials fixture', isSuccess: false },
	{ name: 'users', title: 'Login with users fixture', isSuccess: true},
]

usersCredentials.forEach(credentials => {
	describe.only(credentials.title, () => {
		beforeEach(() => {
			loginPage.visit()
		})

		it('Login', () => {
			loginPage.validateLoginPage()
			cy.fixture(credentials.name).then(credential => {
				const { email, password } = credential
				loginPage.login(email, password)

				if(credentials.isSuccess)
					loginPage.validateSuccessLogin()
				else
					loginPage.validateErrorLogin()
			})
		})
	})
})
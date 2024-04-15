import { loginPage } from '../PageObjects/LoginPage'
describe('Login with POM', () => {
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
})
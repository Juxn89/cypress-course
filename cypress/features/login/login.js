const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const { loginPage } = require('../../PageObjects/LoginPage') 

Given('I am on the login page', () => {
	loginPage.visit()
	loginPage.validateLoginPage()
})

When('I fill in my email and password with {string} and {string}', (username, password) => {
	loginPage.login(username, password)
})

Then('I should validate that I am logged in', () => {
	loginPage.validateSuccessLogin()
})
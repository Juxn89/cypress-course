Feature: Login Outline
	Scenario Outline: Login with invalid credentials
		Given I am on the login page
		When I fill in my email and password with "username" and "pass"
		Then I should validate that I am not logged in
		Examples:
				| user 				| pass 				|
				| username1  	| password1  	|
				| username2  	| password2  	|
				| username3  	| password3  	|
				| username4  	| password4  	|
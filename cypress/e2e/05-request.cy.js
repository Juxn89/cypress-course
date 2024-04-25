describe('Testing the request', () => {
	it('Must create an employee', function() {
		cy.request({ 
			url: 'employees', 
			method: 'POST',
			body: {
				first_name: 'My Name',
				last_name: 'My Lastname',
				email: 'test@mail.com'
			} 
		})
		.then(response => {
			expect(response.status).to.be.equal(201)
			expect(response.body).to.have.property('id')

			const id = response.body.id;
			cy.wrap(id).as('id')
		})
	})

	it('Must validate that record was saved in the database', () => {
		cy.request('GET', 'employees')
			.then(resposen => {
				expect(resposen.body[resposen.body.length - 1].first_name).to.be.equal('My Name')
			})
	})

	

	it('Must modify the employee created with a new email', function () {
		cy.request({
				url: `employees/${this.id}`, 
				method: 'PUT',
				body: {
					first_name: 'My Name',
					last_name: 'My Lastname',
					email: 'test_updated@mail.com'
				}
			})
			.then(response => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('id')
			})
	})	

	it('Must delete the new employee', function () {
		cy.request({
				url: `employees/${this.id}`, 
				method: 'DELETE'
			})
			.then(response => {
				expect(response.status).to.eq(200)
			})
	})
})
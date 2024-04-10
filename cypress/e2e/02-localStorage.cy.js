describe('LocalStorage', () => {
	Cypress.on('uncaught:exception', (error, runnable) => false)

	beforeEach(() => {
		// cy.visit('https://todo-cypress-iota.vercel.app/')
		// cy.get('#title').type('TODO title')
		// cy.get('#description').type('TODO description')
		// cy.contains('Create').click()

		cy.session('todo_session', () => {
			cy.visit('https://todo-cypress-iota.vercel.app/')
				.then( () => {
					localStorage.setItem('react_todo_ids', JSON.stringify(['TODO title']))
					localStorage.setItem('TODO title', JSON.stringify({ 
						title: 'TODO title', 
						id: 'TODO title', 
						completed: false,
						description: 'TODO description'
					}))
				})			
			})
			cy.visit('https://todo-cypress-iota.vercel.app/')
	})

	it('Add new TODO', () => {
		cy.reload()
		cy.contains('TODO title')
			.then(() => {
				expect(localStorage.getItem('TODO title')).to.exist
			})
		
		cy.contains('Remove')
			.click()
			.then( () => {
				expect(localStorage.getItem('TODO title')).to.not.exist
			})

		cy.clearLocalStorage('TODO title').should(ls => {
			expect(ls.getItem('prop1')).to.be.null
		})
	})
})
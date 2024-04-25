describe('Testing errors', () => {
	it('Must validate the failed status code and the error message - Pokeapi', () => {
		cy.request({ url: 'https://pokeapi.co/api/v2/9999', failOnStatusCode: false })
			.then(response => {
				expect(response.status).to.be.equal(404)
				expect(response.body).to.be.equal('Not Found')
			})
	})

	it('Must validate the failed status code and the error message - Rick and Morty API', () => {
		cy.request({ url: 'https://rickandmortyapi.com/api/location/9999', failOnStatusCode: false })
			.then(response => {
				expect(response.status).to.be.equal(404)
				expect(response.body).to.have.property('error', 'Location not found')
			})
	})
})
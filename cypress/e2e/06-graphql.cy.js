describe('Testing with GraphQL', () => {
	it('Must do a request with GraphQL', () => {
		// https://graphql-pokeapi.vercel.app/

		const gqlQuery  = `
			query pokemons($limit: Int, $offset: Int) {
				pokemons(limit: $limit, offset: $offset) {
					count
					next
					previous
					status
					message
					results {
						url
						name
						image
					}
				}
			}
		`
		const gqlVariables = {
			limit: 10,
			offset: 0,
		};

		cy.request({
			method: 'POST',
			url: 'https://graphql-pokeapi.graphcdn.app/',
			body: { 
				query: gqlQuery, 
				variables: gqlVariables 
			}
		})
		.then(response => {
			cy.log(response)
			expect(response.body.data.pokemons.results[0].name).to.equal('bulbasaur')
		})
	})
})
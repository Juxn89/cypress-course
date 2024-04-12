const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl: "https://pokedexpokemon.netlify.app/",
		retries: 2,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})

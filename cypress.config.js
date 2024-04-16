const { defineConfig } = require('cypress')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = defineConfig({
	e2e: {
		baseUrl: "https://pokedexpokemon.netlify.app/",
		retries: 2,
		env: {
			credentials: {
				user: 'username',
				password: 'password'
			}
		},
		setupNodeEvents(on, config) {
			// implement node event listeners here
			config.env.variable_env= process.env.NODE_ENV ?? 'NO ENVIROMENT VARIABLES SETTED',
			addMatchImageSnapshotPlugin(on, config)
		},
	},
})
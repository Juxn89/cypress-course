const { defineConfig } = require('cypress')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

const values = {}

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
			addMatchImageSnapshotPlugin(on, config),
			on("task", {
				saveValue(value) { 
					const key = Object.keys(value)[0]

					values[key] = value[key]
					return null
				},
				getValue(key){ 
					console.log('values', values)
					return values[key] ?? 'There is not value'
				}
			})
		},
	},
})
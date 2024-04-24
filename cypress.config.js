const { defineConfig } = require('cypress')
const webpack = require('@cypress/webpack-preprocessor')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const allureWritter = require('@shelex/cypress-allure-plugin/writer')

const values = {}

async function setupNodeEvents(on, config) {
	// implement node event listeners here
	config.env.variable_env= process.env.NODE_ENV ?? 'NO ENVIROMENT VARIABLES SETTED'

	addMatchImageSnapshotPlugin(on, config)

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

	await preprocessor.addCucumberPreprocessorPlugin(on, config)

	on("file:preprocessor",
		webpack({
			webpackOptions: {
				resolve: {
					extensions: [".ts", ".js"],
				},
				module: {
					rules: [
						{
							test: /\.feature$/,
							use: [
								{
									loader: "@badeball/cypress-cucumber-preprocessor/webpack",
									options: config,
								},
							],
						},
					],
				},
			},
		})
	)

	allureWritter(on, config)

	return config
}

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
		setupNodeEvents,
		specPattern: '**/*.feature'
	},
	reporter: "cypress-multi-reporters",
	reporterOptions: {
		configFile: "reporter-config.json"
	}
})
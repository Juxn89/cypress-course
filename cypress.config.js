const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
		setupNodeEvents(on, config) {
			on('task', {
				log(message) { 
					console.log(`I'm the console.log from Task: ${ message }`)
					return null
				}
			})
		},
    baseUrl: 'https://demoqa.com',
    excludeSpecPattern: [
      '**/1-getting-started/*.js',
      '**/2-advanced-examples/*.js',
    ],
    viewportWidth: 1920,
    viewportHeight: 1080,
		testIsolation: false,
		video: true
  },
});

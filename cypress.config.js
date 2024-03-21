const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    excludeSpecPattern: [
      '**/1-getting-started/*.js',
      '**/2-advanced-examples/*.js',
    ],
    viewportHeight: 1920,
    viewportWidth: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

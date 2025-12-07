const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  watchForFileChanges: false,
  viewportWidth: 1440,
  viewportHeight: 1000,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  experimentalFetchPolyfill: true,
  parseSpecialCharSequences: false,
  downloadsFolder: "cypress/downloads",
  projectId: "ABCDEF",

  env: {
    baseUrl: "https://trade.multibank.io/",
  },

  video: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    reportFilename: "report",
    overwrite: false,
    html: false,
    json: false,
    charts: false,
  },

  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
       on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      on("before:browser:launch", (browser, launchOptions) => {
        launchOptions.args.push("--another-arg");
        // Uncomment below code to run browser in fullscreen
        /*if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--start-fullscreen');
          return launchOptions;
        }
        if (browser.name === 'electron') {
          launchOptions.preferences.fullscreen = true;
          return launchOptions;
        }*/
        return launchOptions;
      });
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    stepDefinitions: "cypress/support/step_definations/**/*.js",
    testIsolation: false,
  },
});

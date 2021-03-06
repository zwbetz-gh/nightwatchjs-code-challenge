const process = require('process');
require('dotenv').config({path: '.env'});

// Autogenerated by Nightwatch
// Refer to the online docs for more details: https://nightwatchjs.org/gettingstarted/configuration/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['src/tests'],

  // See https://nightwatchjs.org/guide/working-with-page-objects/
  page_objects_path: 'src/pages',

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
  custom_commands_path: '',

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-assertions
  custom_assertions_path: '',

  // See https://nightwatchjs.org/guide/#external-globals
  globals_path: '',

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: process.env.LAUNCH_URL,

      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // This tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: false,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        port: 9515,
        server_path: process.env.CHROMEDRIVER_PATH,
        cli_args: [
          // --verbose
        ]
      }
    }
  }
};

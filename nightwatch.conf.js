const geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'step_definitions','--format', 'node_modules/cucumber-pretty', '--format', 'json:reports/cucumber.json', 'features']
});

module.exports = {
  test_workers: true,
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: true,
  selenium: {
    start_process: true,
    server_path: 'bin/selenium-server-standalone-3.14.0.jar',
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:8087',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
        //  args: ['incognito', 'headless', 'no-sandbox', 'disable-gpu']
        }
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': 'bin/chromedriver.exe'
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': 'bin/chromedriver.exe'
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        marionette: true
      },
      selenium: {
        cli_args: {
          'webdriver.gecko.driver': geckodriver.path
        }
      }
    }
  }
};

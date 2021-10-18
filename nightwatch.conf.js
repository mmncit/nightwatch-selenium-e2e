const CHROME_CONFIG = {
  desiredCapabilities: {
    browserName: "chrome",
    javascriptEnabled: true,
    acceptSslCerts: true,
  },
};

const FIREFOX_CONFIG = {
  desiredCapabilities: {
    browserName: "firefox",
    acceptSslCerts: true,
  },
};

const SAFARI_CONFIG = {
  desiredCapabilities: {
    browserName: "safari",
    javascriptEnabled: true,
    acceptSslCerts: true,
  },
};

const EDGE_CONFIG = {
  desiredCapabilities: {
    platform: "Windows 10",
    browserName: "MicrosoftEdge",
  },
};

function getCLIArgs() {
  if (process.platform === "darwin") {
    return {
      "webdriver.safari.driver": "/usr/bin/safaridriver",
      "webdriver.gecko.driver": "./node_modules/.bin/geckodriver",
      "webdriver.chrome.driver": "./node_modules/.bin/chromedriver",
    };
  }
  return {
    "webdriver.edge.driver": "./node_modules/.bin/edgedriver.cmd",
    "webdriver.gecko.driver": "./node_modules/.bin/geckodriver.cmd",
    "webdriver.chrome.driver": "./node_modules/.bin/chromedriver.cmd",
  };
}

module.exports = {
  src_folders: ["tests"],
  output_folder: "reports",
  custom_commands_path: "",
  custom_assertions_path: "",
  globals_path: "global.js",
  page_objects_path: "pages",

  // Needed for safari.
  webdriver: {
    start_process: true,
    server_path: "/usr/bin/safaridriver",
    port: 4445,
  },

  selenium: {
    start_process: true,
    server_path: "./selenium/selenium-server-standalone-4.0.0-alpha-2.jar",
    log_path: "./selenium",
    port: 4444,
    cli_args: getCLIArgs(),
  },

  test_workers: {
    enabled: true,
    workers: 1,
  },

  test_settings: {
    default: {
      launch_url: "http://the-internet.herokuapp.com/",
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
      live_output: true,
      persist_globals: true,
      screenshots: {
        enabled: true,
        path: "./screenshots",
        on_failure: true,
        on_error: true,
      },
      desiredCapabilities: {
        ...CHROME_CONFIG.desiredCapabilities,
        marionette: true,
      },
      globals: {
        waitForConditionTimeout: 20000,
      },
      end_session_on_fail: false,
    },
    chrome: CHROME_CONFIG,
    firefox: FIREFOX_CONFIG,
    edge: EDGE_CONFIG,
    safari: SAFARI_CONFIG,
  },
};

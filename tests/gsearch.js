module.exports = {
  "Test Google Search": function (browser) {
    browser.url("https://www.google.com");
    browser.waitForElementVisible("input[type=text]");
    browser.setValue("input[type=text]", "bangladesh");
  },
};

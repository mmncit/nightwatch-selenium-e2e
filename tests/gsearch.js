module.exports = {
  "Test Google Search": function (browser) {
    browser
      // go to url google.com
      .url("https://www.google.com")

      // wait for search box to be visible and type "bangladesh"
      .waitForElementVisible("input[type=text]")
      .setValue("input[type=text]", "bangladesh")

      // wait for "Google Search" button to be visible and click
      .waitForElementVisible('input[value="Google Search"]', 1000)
      .click('input[value="Google Search"]')

      // wait for main page to be visible and check if "bangladesh" related search result exists
      .waitForElementVisible("#main", 5000)
      .assert.containsText("#main", "bangladesh")
      .assert.containsText("#main", "Dhaka")

      // close the browser
      .end();
  },
};

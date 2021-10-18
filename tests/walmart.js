module.exports = {
  "Test Walmart Search": function (browser) {
    var search = browser.page.walmart();
    search.navigate().setValue("@idField", "123");
  },
};

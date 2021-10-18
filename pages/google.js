"use strict";

module.exports = {
  url: "http://google.com",
  elements: {
    searchBar: {
      selector: "input[type=text]",
    },
    submit: {
      selector: '//button[@name="btnK"]',
      locateStrategy: "xpath",
    },
  },
};

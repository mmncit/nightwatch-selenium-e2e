"use strict";

module.exports = {
  elements: {
    idField: {
      selector: "input#spl_q_walmart_voc_store_receipt_code_txt",
    },
    stField: {
      selector: "input#spl_q_walmart_voc_store_storeid_validation_txt",
    },
    submit: {
      selector: "button#buttonNext",
    },
  },
  commands: [
    {
      signInAsAdmin: function () {
        return this.setValue("@idField", "admin")
          .setValue("@stField", "password")
          .click("@submit");
      },
    },
  ],
};

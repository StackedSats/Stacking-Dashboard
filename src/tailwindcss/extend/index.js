const plugin = require("tailwindcss/plugin");

// Plugins
const buttons = require("../buttons");

module.exports = plugin.withOptions(function () {
  return function (options) {
    buttons(options);
  };
});

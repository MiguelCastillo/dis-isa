/* jshint unused: false, undef: false */
var System = (function() {
  var importer = bitimports.config({
    "baseUrl": "../",
    "paths": {
      "chai": "node_modules/chai/chai"
    },
    "urlArgs": 'bust=' + (new Date()).getTime()
  });

  bitimports.logger.enable();
  return importer;
})();

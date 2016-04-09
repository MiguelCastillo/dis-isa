module.exports = {
  "test": {
    "files": [
      "src/**/*.js",
      "test/**/*.js",
      "*.js"
    ],
    "tasks": [
      "jshint:all",
      "browserify:build"
    ],
    "options": {
      "livereload": 32071
    }
  }
};
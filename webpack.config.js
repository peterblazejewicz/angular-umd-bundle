const webpack = require("webpack");
/**
 *
 * @param {webpack.Configuration} config
 * @param {Record<string, unknown>} options
 * @returns {webpack.Configuration}
 */
module.exports = (config, options) => {
  config.externals = {
    "@angular/common": "ng.common",
    "@angular/common/http": "ng.common.http",
    "@angular/compiler": "ng.compiler",
    "@angular/core": "ng.core",
    "@angular/forms": "ng.forms",
    "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
    "@angular/platform-browser": "ng.platformBrowser",
    "@angular/router": "ng.router",
    "rxjs/operators": "rxjs.operators",
    rxjs: "rxjs",
  };
  return config;
};

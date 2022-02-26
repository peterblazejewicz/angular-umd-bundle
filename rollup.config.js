import { terser } from "rollup-plugin-terser";

const mangle = true;
const plugins = [
  terser({
    mangle,
  }),
];

export default [
  // rxjs
  {
    input: "./node_modules/rxjs/dist/esm/index.js",
    output: {
      file: "./dist/rxjs/bundles/rxjs.umd.js",
      format: "umd",
      name: "rxjs",
      globals: {
        rxjs: "rxjs",
        tslib: "tslib",
      },
      plugins,
    },
    external: ["tslib"],
  },
  {
    input: "./node_modules/rxjs/dist/esm/operators/index.js",
    output: {
      file: "./dist/rxjs/bundles/operators.umd.js",
      format: "umd",
      name: "rxjs.operators",
      globals: {
        rxjs: "rxjs",
        tslib: "tslib",
      },
      plugins,
    },
    external: ["rxjs", "tslib"],
  },
  // animations
  {
    input: "./node_modules/@angular/animations/fesm2015/animations.mjs",
    output: {
      file: "./dist/@angular/animations/bundles/animations.umd.js",
      format: "umd",
      name: "ng.animations",
      globals: {
        "@angular/animations": "ng.animations",
      },
      plugins,
    },
  },
  // common
  {
    input: "./node_modules/@angular/common/fesm2015/common.mjs",
    output: {
      file: "./dist/@angular/common/bundles/common.umd.js",
      format: "umd",
      name: "ng.common",
      globals: {
        "@angular/common": "ng.common",
        "@angular/core": "ng.core",
      },
      plugins,
    },
    external: ["@angular/core"],
  },
  // common.http
  {
    input: "./node_modules/@angular/common/fesm2015/http.mjs",
    output: {
      file: "./dist/@angular/common/bundles/common-http.umd.js",
      format: "umd",
      name: "ng.common.http",
      globals: {
        "@angular/common/http": "ng.common.http",
        "@angular/common": "ng.common",
        "@angular/core": "ng.core",
        rxjs: "rxjs",
        "rxjs/operators": "rxjs.operators",
      },
      plugins,
    },
    external: ["@angular/core", "@angular/common", "rxjs", "rxjs/operators"],
  },
  // compiler
  {
    input: "./node_modules/@angular/compiler/fesm2015/compiler.mjs",
    output: {
      file: "./dist/@angular/compiler/bundles/compiler.umd.js",
      format: "umd",
      name: "ng.compiler",
      plugins,
    },
  },
  // core
  {
    input: "./node_modules/@angular/core/fesm2015/core.mjs",
    output: {
      file: "./dist/@angular/core/bundles/core.umd.js",
      format: "umd",
      name: "ng.core",
      globals: {
        "@angular/core": "ng.core",
        rxjs: "rxjs",
        "rxjs/operators": "rxjs.operators",
      },
      plugins,
    },
    external: ["rxjs", "rxjs/operators"],
  },
  // forms
  {
    input: "./node_modules/@angular/forms/fesm2015/forms.mjs",
    output: {
      file: "./dist/@angular/forms/bundles/forms.umd.js",
      format: "umd",
      name: "ng.forms",
      globals: {
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        rxjs: "rxjs",
        "rxjs/operators": "rxjs.operators",
      },
      plugins,
    },
    external: ["@angular/core", "@angular/common", "rxjs", "rxjs/operators"],
  },
  // platform-browser
  {
    input:
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.mjs",
    output: {
      file: "./dist/@angular/platform-browser/bundles/platform-browser.umd.js",
      format: "umd",
      name: "ng.platformBrowser",
      globals: {
        "@angular/common": "ng.common",
        "@angular/core": "ng.core",
      },
      plugins,
    },
    external: ["@angular/core", "@angular/common"],
  },
  // platform-browser-dynamic
  {
    input:
      "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.mjs",
    output: {
      file: "./dist/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
      format: "umd",
      name: "ng.platformBrowserDynamic",
      globals: {
        "@angular/compiler": "ng.compiler",
        "@angular/common": "ng.common",
        "@angular/core": "ng.core",
        "@angular/platform-browser": "ng.platformBrowser",
      },
      plugins,
    },
    external: [
      "@angular/compiler",
      "@angular/core",
      "@angular/common",
      "@angular/platform-browser",
    ],
  },
  // router
  {
    input: "./node_modules/@angular/router/fesm2015/router.mjs",
    output: {
      file: "./dist/@angular/router/bundles/router.umd.js",
      format: "umd",
      name: "ng.router",
      globals: {
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        rxjs: "rxjs",
        "rxjs/operators": "rxjs.operators",
      },
      plugins,
    },
    external: ["@angular/core", "@angular/common", "rxjs", "rxjs/operators"],
  },
  // ngrx
  {
    input: "./node_modules/@ngrx/store/fesm2015/ngrx-store.mjs",
    output: {
      file: "./dist/@ngrx/store/bundles/ngrx-store.umd.js",
      format: "umd",
      name: "ngrx.store",
      globals: {
        "@ngrx/store": "ngrx.store",
        "@angular/core": "ng.core",
        rxjs: "rxjs",
        "rxjs/operators": "rxjs.operators",
      },
      plugins,
    },
    external: ["@angular/core", "rxjs", "rxjs/operators"],
  },
  // ngrx-dev-tools
  {
    input:
      "./node_modules/@ngrx/store-devtools/fesm2015/ngrx-store-devtools.mjs",
    output: {
      file: "./dist/@ngrx/store/bundles/ngrx-store-devtools.umd.js",
      format: "umd",
      name: "ngrx.store-devtools",
      globals: {
        "@ngrx/store": "ngrx.store",
        "@angular/core": "ng.core",
        rxjs: "rxjs",
        "rxjs/operators": "rxjs.operators",
      },
      plugins,
    },
    external: ["@angular/core", "@ngrx/store", "rxjs", "rxjs/operators"],
  },
];

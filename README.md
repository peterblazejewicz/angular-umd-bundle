# Angular UMD Bundle

This project is rework of [sample by M. Gechev](https://github.com/mgechev/angular-umd-bundle):

> The Ivy library distribution format will no longer distribute a UMD bundle. In this repository you can find how to produce a UMD bundle for your use cases.

(which means NG >= 13 version)

Done as part of review of this particular problem:
[externals not working for Angular 13](https://github.com/manfredsteyer/ngx-build-plus/issues/314)

If you are working on a topic of trimming down size of multiple Angular projects, without complexity of Webpack MF (so webpack specific feature stays hidden), this is a project for you:

- custom build step to extract some dependencies out of the bundle
- custom `rollup` config
- using that different assets together (the project uses one of many possible ways to do this)

Example size of the project specific assets (without externals):

```bash
Initial Chunk Files           | Names         | Raw Size | Estimated Transfer Size
polyfills.08f1e56677fe7568.js | polyfills     | 36.22 kB | 11.53 kB
main.8446b2f654044436.js      | main          |  6.69 kB | 2.28 kB
styles.32505c4787ba148c.css   | styles        |  3.43 kB | 1.05 kB
runtime.6a44049d9ab1c63f.js   | runtime       |  1.04 kB | 599 bytes
                              | Initial Total | 47.39 kB | 15.45 kB
```

## Build scripts

In this order:

```bash
npm run build:rollup
```

(next your specific script):

```bash
npm serve
```

```bash
npm build
```

or event tests:

```bash
npm test
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Author

@peterblazejewicz

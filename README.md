# nightwatch-selenium-e2e

The introductory exercises for test automation on different interaction

## Setup

- [Install `java`](https://www.java.com/en/download/manual.jsp)

- [Install `npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Install `yarn`](https://classic.yarnpkg.com/lang/en/docs/install)

## Install dependencies

After setting up the environment, clone or download the repo and run:

```bash
yarn install
```

## Running the test suite

You can run all tests for a particular browser by using one of the following commands.

- `yarn test:chrome`
- `yarn test:firefox`
- `yarn test:edge`
- `yarn test:safari`

The tests for edge and safari will only run on windows and macOS respectively.

## Test Invididual Suite Files

An individual test file can also be run. For instance, to run `heroku.js` on chrome:

```bash
$ yarn test:chrome --test tests/heroku.js
```

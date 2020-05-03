# truffle-typechain-example

# Deprecated. We moved examples to TypeChain repo: https://github.com/ethereum-ts/TypeChain/tree/master/examples

Example how to use Truffle suite with Typescript and Typechain

## Usage:

Just run `yarn generate` to compile smartcontracts and generate initial TS wrappers for contracts. Then `yarn test`

Everytime you change contracts you need to run `yarn generate`.

## Setup

1. Install `truffle-typings`. — `yarn add --dev truffle-typings`
2. Tweak `truffle.js`:

```
require("ts-node/register");

module.exports = {
  // this is required by truffle to find any ts test files
  test_file_extension_regexp: /.*\.ts$/,
};
```

3. Install typechain — `yarn add --dev typechain`

4. Add `generate` script in your package.json:

```
"scripts": {
    "generate": "truffle compile && typechain --target truffle './build/**/*.json'",
    "prepare": "yarn generate",
  }
```

5. Everytime you change contracts you need to run `yarn generate`.

6. Your migration functions should be typed as: `Truffle.Migration` and you sometimes need to make sure that they are treated as modules by `tsc` by adding: `export {};`.

7. If you run tests with `truffle test` you might need to tweak your `tsconfig.json`, otherwise you get missing import errors like `Cannot find name 'artifacts'`. [An example config is provided in this project](./tsconfig.json).

8. It's done! 🔥 Make sure to use `.ts` extension for everything

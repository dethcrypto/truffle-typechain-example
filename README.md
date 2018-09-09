# truffle-typechain-example

Example how to use Truffle suite with Typescript and Typechain

## Usage:

Just run `yarn generate` to compile smartcontracts and generate initial TS wrappers for contracts. Then `yarn test`

Everytime you change contracts you need to run `yarn generate`.

## Setup

1. Install `truffle-typings`.
2. Tweak `truffle.js`:
```
require("ts-node/register");

module.exports = {
  // this is required by truffle to find any ts test files
  test_file_extension_regexp: /.*\.ts$/,
};
```

3. Install typechain — `yarn add --dev typechain`

4. Your migration functions should be typed as: `Truffle.Migration` and you sometimes need to make sure that they are treated as modules by `tsc` by adding: `export {};`.

5. It's done! 🔥 Make sure to use `.ts` extension for everything
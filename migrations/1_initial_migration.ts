const Migrations = artifacts.require("Migrations");
const Greeter = artifacts.require("Greeter");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Greeter, "test greeting");
} as Truffle.Migration;

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};


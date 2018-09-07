const Greeter = artifacts.require("Greeter");

contract("Greeter", ([deployer, user1]) => {
  it("should return correct message for non-deployer", async () => {
    const expectedMessage = "abc";

    const greeter = await Greeter.new(expectedMessage, { from: deployer });
    const actualMessage = await greeter.sayHello({ from: user1 });

    expect(actualMessage).to.be.deep.eq(expectedMessage);
  });

  it("should return correct message for deployer", async () => {
    const customMessage = "def";

    const greeter = await Greeter.new(customMessage, { from: deployer });
    const actualMessage = await greeter.sayHello({ from: deployer });

    expect(actualMessage).to.be.deep.eq("Hello daddy!");
  });

  it("should allow to change greeting", async () => {
    const expectedMessage = "final greeting";

    const greeter = await Greeter.new("abc", { from: deployer });
    await greeter.setGreeting(expectedMessage, { from: deployer });
    const actualMessage = await greeter.sayHello({ from: user1 });

    expect(actualMessage).to.be.deep.eq(expectedMessage);
  });
});

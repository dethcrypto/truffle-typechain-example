pragma solidity ^0.4.24;

import "./Owned.sol";

contract Greeter is Owned {
  string private greetingText;

  constructor(string _greetingText) public {
    owner = msg.sender;
    greetingText = _greetingText;
  }

  function sayHello() public view returns (string) {
    if (msg.sender == owner) {
      return "Hello daddy!";
    } else {
      return greetingText;
    }
  }

  function setGreeting(string _newGreeting) public onlyOwner {
    greetingText = _newGreeting;
  }
}
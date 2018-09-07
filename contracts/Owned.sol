pragma solidity ^0.4.24;

contract Owned {
  address internal owner;

  modifier onlyOwner {
    require(msg.sender == owner, "Only owner can call it!");
    _;
  }
}
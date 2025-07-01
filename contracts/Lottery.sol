// SPDX-License-Identifier: MIT
pragma solidity >0.8.0;

contract Lottery {

    event VRF();

    uint256 public counter;
    uint256 public price;
    address public oracle;
    address public owner;
    address public winner;

    mapping(uint256 => address) public player;

    modifier minAmount(uint256 value) {
        require(value == price,"Insuficient Funds");
        _;
    }

    modifier onlyOracle() {
        require(msg.sender == oracle, "No Permissions");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "No Permissions");
        _;
    }

    constructor() {
        owner = msg.sender;
    }
    function play() external payable minAmount(msg.value) {
        uint256 _counter = counter++;
        player[_counter] = msg.sender;
        emit VRF();
        if(_counter == 99) {
            //temino.
            emit VRF();
        }
    }

    function setOracle(address _oracle) external onlyOwner {
        oracle = _oracle;
    }
    function fullfilRandomness(uint256 _random) external {
        address payable _winner;
        _winner = payable(player[_random]);
        _winner.transfer(address(this).balance);
        winner = _winner;
        // evento que me emita con el ganador
        // checkear el tema de reentrancy
    }
}
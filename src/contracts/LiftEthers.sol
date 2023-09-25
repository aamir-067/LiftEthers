// SPDX-License-Identifier: MIT
pragma solidity >=0.6 <0.9.0;

contract LiftEthers {
    struct Tip {
        address from;
        uint time;
        uint amount;
        string name;
        string massage;
    }
    Tip[] tips;
    address payable developer;

    constructor() {
        developer = payable(msg.sender);
    }

    receive() external payable {
        tips.push(
            Tip(msg.sender, block.timestamp, msg.value, "unknown", "no massage")
        );
    }

    fallback() external payable {
        tips.push(
            Tip(msg.sender, block.timestamp, msg.value, "unknown", "no massage")
        );
    }

    function giveTip(
        string memory _name,
        string memory _massage
    ) public payable {
        require(bytes(_name).length <= 32, "name length must be less than 32");
        require(msg.value > 0, "value must be greater than 0");
        tips.push(Tip(msg.sender, block.timestamp, msg.value, _name, _massage));
        developer.transfer(msg.value);
    }

    modifier onlyDeveloper() {
        require(msg.sender == developer, "only developer can call this");
        _;
    }

    function allTips() public view returns (Tip[] memory) {
        return tips;
    }
}

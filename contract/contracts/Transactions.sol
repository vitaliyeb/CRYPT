// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Transactions {
    event Transfer(address from, address receiver, uint amount, string message, uint timestamp, string keyword);

    uint256 transactionsCount = 0;
    struct TransferStruct {
        uint amount;
        uint timestamp;
        address sender;
        address receiver;
        string keyword;
        string message;
    }

    TransferStruct[] transfers;

    function addToBlock(address payable _receiver, uint _amount, string memory _message, string memory _keyword) public {
        transactionsCount += 1;
        transfers.push(TransferStruct(_amount, block.timestamp, msg.sender, _receiver, _keyword, _message));
        emit Transfer(msg.sender, _receiver, _amount, _message, block.timestamp, _keyword);
    }

    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transfers;
    }

    function getTransactionCount() public view returns(uint256) {
        return transactionsCount;
    }
}

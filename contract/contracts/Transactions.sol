// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Transactions {

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

    function addToBlock(address payable _receiver, uint _amount, string memory _message, uint _timestamp, string memory _keyword) public {
        transactionsCount += 1;
        transactions.push(TransferStruct());
    }

    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public views returns(uint256) {
        return transactionsCount;
    }
}

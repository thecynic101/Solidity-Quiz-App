let questions = [
    { 
        numb: 1,
        question:'In Solidity, what is the keyword used to declare a state variable?',
        answer:'public',
        options: [
            'static',
            'let',
            'public',
            'var'
        ]
    }, { 
        numb: 2,
        question:'Which keyword is used to handle exceptions in Solidity?',
        answer:'require',
        options: [
            'catch',
            'throw',
            'require',
            'exception'
        ]
    }, { 
        numb: 3,
        question:' Which Solidity data type is used to store integers?',
        answer:'int',
        options: [
            'int',
            'float',
            'byte',
            'string'
        ]
    }, { 
        numb: 4,
        question:'What is the default visibility of state variables in Solidity?',
        answer:'internal',
        options: [
            'public',
            'internal',
            'private',
            'external'
        ]
    }, { 
        numb: 5,
        question:'Which of the following is the correct file extension for Solidity files?',
        answer:'.sol',
        options: [
            '.solc',
            '.sol',
            '.eth',
            '.sc'
        ]
    },

    { 
        numb: 6,
        question:'Which of the following is a correct way to initialize a constructor in Solidity?',
        answer:'constructor() public { }',
        options: [
            'constructor() public { }',
            'constructor[] { }',
            'init() { }',
            'function constructor() { }'
        ]
    }, { 
        numb: 7,
        question:'How can you protect a function in Solidity to only be executed by the contract owner?',
        answer:'Use the modifier "onlyOwner"',
        options: [
            'Use the modifier "onlyOwner"',
            'Use the keyword "private"',
            'Use "msg.sender == address"',
            'Restrict the function to internal access'
        ]
    }, { 
        numb: 8,
        question:'Which of the following is not a Solidity data type?',
        answer:'float',
        options: [
            'uint',
            'address',
            'float',
            'bool'
        ]
    }, { 
        numb: 9,
        question:'What is the purpose of the msg.sender in Solidity?',
        answer:'It refers to the address of the account that called the function.',
        options: [
            'It refers to the address of the account that called the function.',
            'It stores the amount of Ether sent with a transaction.',
            'It stores the gas price of the transaction.',
            'It is the function selector.'
        ]
    }, { 
        numb: 10,
        question:'Which function is used to transfer Ether in Solidity?',
        answer:'transfer()',
        options: [
            'send()',
            'transfer()',
            'emit()',
            'pay()'
        ]
    }, { 
        numb: 11,
        question:'What is the keyword used to declare a function as payable in Solidity?',
        answer:'payable',
        options: [
            'send',
            'payable',
            'ether',
            'transfer'
        ]
    }, { 
        numb: 12,
        question:'In Solidity, what is the keyword used to declare a state variable?',
        answer:'public',
        options: [
            'static',
            'let',
            'public',
            'var'
        ]
    }, { 
        numb: 13,
        question:'Which of the following types is used to store Ether values in Solidity?',
        answer:'wei',
        options: [
            'int',
            'uint256',
            ' wei',
            'ether'
        ]
    }, { 
        numb: 14,
        question:'In Solidity, what is the keyword used to declare a state variable?',
        answer:'public',
        options: [
            'static',
            'let',
            'public',
            'var'
        ]
    }, { 
        numb: 15,
        question:'What is the smallest unit of Ether?',
        answer:'Wei',
        options: [
            'Finney',
            'Gwei',
            'Ether',
            'Wei'
        ]
    }, { 
        numb: 16,
        question:'In Solidity, what is the keyword used to declare a state variable?',
        answer:'public',
        options: [
            'static',
            'let',
            'public',
            'var'
        ]
    }, { 
        numb: 17,
        question:'How can you define a fixed-size array in Solidity?',
        answer:'uint[5] numbers;',
        options: [
            'uint[5] numbers;',
            'uint[5] numbers = [0, 0, 0, 0, 0];',
            'uint[] numbers;',
            'uint[5] memory numbers;'
        ]
    }, { 
        numb: 18,
        question:'What does the require() function do in Solidity?',
        answer:'It checks a condition and reverts the transaction if false.',
        options: [
            'It checks a condition and reverts the transaction if false.',
            'It terminates the smart contract.',
            'It declares a public function.c',
            'It logs events.'
        ]
    }, { 
        numb: 19,
        question:'How is inheritance achieved in Solidity?',
        answer:'Using the keyword "is"',
        options: [
            'Using the keyword "is"',
            'Using the keyword "extends"',
            'Using the keyword "super"',
            'Using the keyword "inherits"'
        ]
    }, { 
        numb: 20,
        question:'Which of the following is a way to generate an event in Solidity?',
        answer:'emit EventName();',
        options: [
            'emit EventName();',
            'throw EventName();',
            'require EventName();',
            'execute EventName();'
        ]
    }, { 
        numb: 21,
        question:'What does keccak256() function do in Solidity?',
        answer:'Computes the Keccak-256 hash of the input',
        options: [
            'Generates a random number',
            'Converts data to a hash value',
            'Computes the Keccak-256 hash of the input',
            'Encrypts the data'
        ]
    }, { 
        numb: 22,
        question:'How can a smart contract self-destruct in Solidity?',
        answer:'Using the selfdestruct() function',
        options: [
            'Using the terminate() function',
            'Using the destroy() function',
            'Using the selfdestruct() function',
            'Using the kill() function'
        ]
    }, { 
        numb: 23,
        question:'Which data structure is most commonly used for storing token balances in an ERC-20 token contract?',
        answer:'mapping(address => uint256)',
        options: [
            'mapping(address => uint256)',
            'mapping(uint256 => address)',
            'uint256[]',
            'address[]'
        ]
    }, { 
        numb: 24,
        question:'Which of the following is the correct way to declare a constant in Solidity?',
        answer:'uint public constant MAX_SUPPLY = 1000;',
        options: [
            'const uint public MAX_SUPPLY = 1000;',
            'uint public constant MAX_SUPPLY = 1000;',
            'constant uint public MAX_SUPPLY = 1000;',
            'MAX_SUPPLY = 1000;'
        ]
    }, { 
        numb: 25,
        question:'Which of the following statements is true about the "fallback" function in Solidity?',
        answer:'It is a special function that is executed when no other function matches the call data.',
        options: [
            'It is a special function that is executed when no other function matches the call data.',
            'It is used to generate random numbers.',
            'It returns the Ether balance of the contract.',
            'It can accept any number of parameters.'
        ]
    }, { 
        numb: 26,
        question:'What is the purpose of the modifier keyword in Solidity?',
        answer:'To modify the state of the contract',
        options: [
            'To modify the state of the contract',
            'To modify the visibility of a function',
            'To create reusable code that can be added to functions',
            'To change the inheritance chain'
        ]
    }, { 
        numb: 27,
        question:'Which of the following Solidity features ensures that a function can only be called externally?',
        answer:'The external visibility keyword',
        options: [
            'The external visibility keyword',
            'The private visibility keyword',
            'The public visibility keywordc',
            'The internal visibility keyword'
        ]
    }, { 
        numb: 28,
        question:'Which statement correctly declares a private state variable in Solidity?',
        answer:'uint private balance;',
        options: [
            'uint public balance;',
            'uint private balance;',
            'uint internal balance;',
            'uint external balance;'
        ]
    }, { 
        numb: 29,
        question:'How can you send Ether from one address to another within a contract?',
        answer:'Using address(receiver).transfer(amount)',
        options: [
            'Using msg.sender.send(amount)',
            'Using address(receiver).transfer(amount)',
            'Using address(receiver).send(amount)',
            'Using msg.sender.transfer(amount)'
        ]
    }, { 
        numb: 30,
        question:'Which of the following is true about the address type in Solidity?',
        answer:'It can store 20-byte Ethereum addresses',
        options: [
            'It can store integers',
            'It can store 20-byte Ethereum addresses',
            'It can store strings',
            'It is a fixed-point data type'
        ]
    }, { 
        numb: 31,
        question:'Which of the following is the correct syntax for a mapping declaration in Solidity?',
        answer:'mapping(address => uint256) public balances;',
        options: [
            'mapping(uint256 => address) public balances;',
            'mapping(address => uint256) memory balances;',
            'mapping(address => uint256) public balances;',
            'mapping(uint => address) public balances;'
        ]
    }, { 
        numb: 32,
        question:'What does the block.timestamp in Solidity represent?',
        answer:'The timestamp of the current block',
        options: [
            'The block number',
            'The timestamp of the current block',
            'The transaction hash',
            'The gas price'
        ]
    }, { 
        numb: 33,
        question:'How do you create a struct in Solidity?',
        answer:'struct MyStruct { uint256 num; address addr; }',
        options: [
            'struct MyStruct { uint256 num; address addr; }',
            'MyStruct { uint256 num; address addr; }',
            'struct { uint256 num; address addr; } MyStruct;',
            'struct(uint256 num, address addr) MyStruct;'
        ]
    }, { 
        numb: 34,
        question:'What is the main purpose of the constructor in Solidity?',
        answer:'To initialize the contract when it is deployed',
        options: [
            'To handle exception handling',
            'To initialize the contract when it is deployed',
            'To manage events',
            'To manage inheritance'
        ]
    }, { 
        numb: 35,
        question:'What is the purpose of the gas in Ethereum transactions?',
        answer:'To limit the amount of computational work that can be done',
        options: [
            'To calculate the number of transactions',
            'To limit the amount of computational work that can be done',
            'To determine the transaction fee',
            'To set the transaction speed'
        ]
    }, { 
        numb: 36,
        question:'Which of the following correctly defines an event in Solidity?',
        answer:'event EventName(uint indexed num, string name);',
        options: [
            'event EventName(uint num, string name);',
            'Event EventName(uint num, string name);',
            'event EventName(uint indexed num, string name);',
            'emit EventName(uint num, string name);'
        ]
    }, { 
        numb: 37,
        question:'What does the view keyword in Solidity signify?',
        answer:'The function does not modify state variables',
        options: [
            'The function can modify state variables',
            'The function does not modify state variables',
            'The function can send Ether',
            'The function cannot return a value'
        ]
    }, { 
        numb: 38,
        question:'Which of the following statements is correct regarding gas costs in Solidity?',
        answer:'Writing to storage costs more gas than reading',
        options: [
            'Complex operations always have lower gas costs',
            'Operations that read from storage are free',
            'Writing to storage costs more gas than reading',
            'Functions with more parameters are cheaper'
        ]
    }, { 
        numb: 39,
        question:'How do you define an enum in Solidity?',
        answer:'enum Status {Active, Inactive, Paused}',
        options: [
            'enum Status = {Active, Inactive, Paused};c',
            'enum Status {Active, Inactive, Paused}',
            'Status enum {Active, Inactive, Paused}',
            'Status {Active, Inactive, Paused}'
        ]
    }, { 
        numb: 40,
        question:'In Solidity, what is the keyword used to declare a state variable?',
        answer:'public',
        options: [
            'static',
            'let',
            'public',
            'var'
        ]
    }, { 
        numb: 41,
        question:' Which of the following is used to emit an event in Solidity?',
        answer:'emit EventName();',
        options: [
            'emit()',
            'emit EventName();',
            'throw EventName();c',
            'log EventName();'
        ]
    }, { 
        numb: 42,
        question:'What is a pure function in Solidity?',
        answer:'A function that neither reads nor modifies state variables',
        options: [
            'A function that modifies state variables',
            'A function that neither reads nor modifies state variables',
            ' A function that sends Ether',
            'A function that is public'
        ]
    }, { 
        numb: 43,
        question:'Which of the following keywords is used to transfer ownership of a contract in Solidity?',
        answer:'Ownable',
        options: [
            'transferOwnership',
            'Ownable',
            'onlyOwner',
            'transferOwner'
        ]
    }, { 
        numb: 44,
        question:'Which of the following functions is used to transfer ERC-20 tokens?',
        answer:'transfer()',
        options: [
            'transfer()',
            'send()',
            'give()',
            'move()'
        ]
    }, { 
        numb: 45,
        question:'Which of the following is a correct declaration of a fixed-point number in Solidity?',
        answer:'Solidity does not support fixed-point numbers yet',
        options: [
            'fixed256x18 number;',
            'uint256 number;',
            'Solidity does not support fixed-point numbers yet',
            'fixed256 number;'
        ]
    }, { 
        numb: 46,
        question:'What does abi.encodePacked() do in Solidity?',
        answer:'It encodes data tightly packed',
        options: [
            'It decodes data',
            'It encodes data tightly packed',
            'It unpacks data',
            'It returns the gas limit'
        ]
    }, { 
        numb: 47,
        question:'Which function is used to retrieve Ether from a contract in Solidity?',
        answer:'withdraw()',
        options: [
            'sendEther()',
            'retrieveEther()',
            'withdrawEther()c',
            'withdraw()'
        ]
    }, { 
        numb: 48,
        question:'What is the purpose of the indexed keyword in Solidity events?',
        answer:'It allows searching and filtering logs by the indexed parameter',
        options: [
            'It allows searching and filtering logs by the indexed parameter',
            'It prevents the event from being emitted',
            'It makes the event private',
            'It is used for sorting data in the event'
        ]
    }, { 
        numb: 49,
        question:'Which of the following is true about the external visibility keyword in Solidity?',
        answer:'It makes the function accessible from other contracts and transactions',
        options: [
            'It makes the function private',
            'It makes the function accessible from within the contract',
            'It makes the function accessible from other contracts and transactions',
            'It hides the function from other contracts'
        ]
    }, { 
        numb: 50,
        question:'What is the purpose of the selfdestruct function in Solidity?',
        answer:'It destroys the contract and sends the remaining Ether to a specified address',
        options: [
            'It destroys the contract and sends the remaining Ether to a specified address',
            'It resets the state variables of the contract',
            'It reverts the contract to its initial state',
            'It freezes the contract'
        ]
    }, { 
        numb: 1,
        question:'Which of the following correctly describes the payable keyword in Solidity?',
        answer:'It allows a function to receive Ether',
        options: [
            'It allows a contract to receive tokens',
            'It allows a function to receive Ether',
            'It prevents a function from receiving Ether',
            'It converts Ether to tokens'
        ]
    }, { 
        numb: 1,
        question:'What does the revert statement do in Solidity?',
        answer:'It undoes all state changes and refunds ga',
        options: [
            'It logs an error message',
            'It undoes all state changes and refunds gas',
            'It continues the function execution',
            'It emits an event'
        ]
    }, { 
        numb: 1,
        question:'Which of the following is true about constructor function?',
        answer:'It is executed once when the contract is deployed.',
        options: [
            'It is executed once when the contract is deployed.',
            'It can be called multiple times.',
            'It is executed whenever the contract is called.',
            'It is used to destroy the contract.'
        ]
    }, { 
        numb: 1,
        question:'How can you define a dynamic array in Solidity?',
        answer:'uint[] numbers;',
        options: [
            'uint[10] numbers;',
            'uint[10] memory numbers;',
            'uint[] numbers;',
            'uint[10] storage numbers;'
        ]
    }, { 
        numb: 1,
        question:'What does the assert() function do in Solidity?',
        answer:'It checks a condition and throws an error if false.',
        options: [
            'It checks a condition and throws an error if false.',
            'It generates a warning without reverting the transaction.',
            'It transfers Ether to the caller.',
            'It logs a message in the blockchain.'
        ]
    }, { 
        numb: 1,
        question:'Which keyword is used to restrict access to certain functions in Solidity?',
        answer:'onlyOwner',
        options: [
            'require',
            'onlyOwner',
            'transfer',
            'external'
        ]
    }, { 
        numb: 1,
        question:'Which of the following is true about the delegatecall function in Solidity?',
        answer:'It executes a function from another contract in the context of the caller contract.',
        options: [
            'It calls another contract but keeps the context of the current contract.',
            'It executes a function from another contract in the context of the caller contract.',
            'It transfers Ether and calls another contract.',
            'It reverts the state changes of the contract.'
        ]
    }
]
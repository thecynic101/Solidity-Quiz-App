// 1. Each question has a 20-second timer. Once the timer runs out, you'll be automatically moved to the next question.
// 2. Select only one answer for each question.
// 3. Please refrain from using search engines during the quiz. It's all about your knowledge!
// 4. This quiz is designed for fun and learning. Relax, have fun, and see how much you know!
// 5. If you don't know the answer, don't stress! Take a guess or skip to the next question.


// Questions

// What is Solidity?

// A) A programming language used for building decentralized applications
// B) A type of cryptocurrency
// *C) A statically-typed programming language for writing smart contracts on Ethereum
// D) A blockchain consensus mechanism
// Which of the following is the correct file extension for Solidity files?

// A) .solc
// *B) .sol
// C) .eth
// D) .sc
// In Solidity, what is the keyword used to declare a state variable?

// A) static
// B) let
// *C) public
// D) var
// What is the default visibility of state variables in Solidity?

// A) public
// *B) internal
// C) private
// D) external
// Which Solidity data type is used to store integers?

// *A) int
// B) float
// C) byte
// D) string
// Which keyword is used to handle exceptions in Solidity?

// A) catch
// B) throw
// *C) require
// D) exception
// What is a "mapping" in Solidity?

// A) A way to connect contracts
// *B) A key-value store where the key maps to a specific value
// C) A loop structure
// D) A way to define arrays
// Which of the following is a correct way to initialize a constructor in Solidity?

// *A) constructor() public { }
// B) constructor[] { }
// C) init() { }
// D) function constructor() { }
// How can you protect a function in Solidity to only be executed by the contract owner?

// *A) Use the modifier "onlyOwner"
// B) Use the keyword "private"
// C) Use "msg.sender == address"
// D) Restrict the function to internal access
// Which of the following is not a Solidity data type?

// A) uint
// B) address
// *C) float
// D) bool

// What is the purpose of the msg.sender in Solidity?

// *A) It refers to the address of the account that called the function.
// B) It stores the amount of Ether sent with a transaction.
// C) It stores the gas price of the transaction.
// D) It is the function selector.
// Which function is used to transfer Ether in Solidity?

// A) send()
// *B) transfer()
// C) emit()
// D) pay()
// What is the keyword used to declare a function as payable in Solidity?

// A) send
// *B) payable
// C) ether
// D) transfer
// Which of the following types is used to store Ether values in Solidity?

// A) int
// B) uint256
// *C) wei
// D) ether
// What is the smallest unit of Ether?

// A) Finney
// B) Gwei
// C) Ether
// *D) Wei
// How can you define a fixed-size array in Solidity?

// *A) uint[5] numbers;
// B) uint[5] numbers = [0, 0, 0, 0, 0];
// C) uint[] numbers;
// D) uint[5] memory numbers;
// What does the require() function do in Solidity?

// *A) It checks a condition and reverts the transaction if false.
// B) It terminates the smart contract.
// C) It declares a public function.
// D) It logs events.
// How is inheritance achieved in Solidity?

// *A) Using the keyword "is"
// B) Using the keyword "extends"
// C) Using the keyword "super"
// D) Using the keyword "inherits"
// Which of the following is a way to generate an event in Solidity?

// *A) emit EventName();
// B) throw EventName();
// C) require EventName();
// D) execute EventName();
// What does keccak256() function do in Solidity?

// A) Generates a random number
// B) Converts data to a hash value
// *C) Computes the Keccak-256 hash of the input
// D) Encrypts the data
// How can a smart contract self-destruct in Solidity?

// A) Using the terminate() function
// B) Using the destroy() function
// *C) Using the selfdestruct() function
// D) Using the kill() function
// Which data structure is most commonly used for storing token balances in an ERC-20 token contract?

// *A) mapping(address => uint256)
// B) mapping(uint256 => address)
// C) uint256[]
// D) address[]
// Which of the following is the correct way to declare a constant in Solidity?

// A) const uint public MAX_SUPPLY = 1000;
// *B) uint public constant MAX_SUPPLY = 1000;
// C) constant uint public MAX_SUPPLY = 1000;
// D) MAX_SUPPLY = 1000;
// Which of the following statements is true about the "fallback" function in Solidity?

// *A) It is a special function that is executed when no other function matches the call data.
// B) It is used to generate random numbers.
// C) It returns the Ether balance of the contract.
// D) It can accept any number of parameters.
// What is the purpose of the modifier keyword in Solidity?

// *A) To modify the state of the contract
// B) To modify the visibility of a function
// *C) To create reusable code that can be added to functions
// D) To change the inheritance chain
// Which of the following Solidity features ensures that a function can only be called externally?

// *A) The external visibility keyword
// B) The private visibility keyword
// C) The public visibility keyword
// D) The internal visibility keyword
// Which statement correctly declares a private state variable in Solidity?

// A) uint public balance;
// *B) uint private balance;
// C) uint internal balance;
// D) uint external balance;
// How can you send Ether from one address to another within a contract?

// A) Using msg.sender.send(amount)
// *B) Using address(receiver).transfer(amount)
// C) Using address(receiver).send(amount)
// D) Using msg.sender.transfer(amount)
// Which of the following is true about the address type in Solidity?

// A) It can store integers
// *B) It can store 20-byte Ethereum addresses
// C) It can store strings
// D) It is a fixed-point data type
// Which of the following is the correct syntax for a mapping declaration in Solidity?

// A) mapping(uint256 => address) public balances;
// B) mapping(address => uint256) memory balances;
// *C) mapping(address => uint256) public balances;
// D) mapping(uint => address) public balances;
// What does the block.timestamp in Solidity represent?

// A) The block number
// *B) The timestamp of the current block
// C) The transaction hash
// D) The gas price
// How do you create a struct in Solidity?

// *A) struct MyStruct { uint256 num; address addr; }
// B) MyStruct { uint256 num; address addr; }
// C) struct { uint256 num; address addr; } MyStruct;
// D) struct(uint256 num, address addr) MyStruct;
// What is the main purpose of the constructor in Solidity?

// A) To handle exception handling
// *B) To initialize the contract when it is deployed
// C) To manage events
// D) To manage inheritance
// What is the purpose of the gas in Ethereum transactions?

// A) To calculate the number of transactions
// *B) To limit the amount of computational work that can be done
// C) To determine the transaction fee
// D) To set the transaction speed
// Which of the following correctly defines an event in Solidity?

// A) event EventName(uint num, string name);
// B) Event EventName(uint num, string name);
// *C) event EventName(uint indexed num, string name);
// D) emit EventName(uint num, string name);
// What does the view keyword in Solidity signify?

// A) The function can modify state variables
// *B) The function does not modify state variables
// C) The function can send Ether
// D) The function cannot return a value
// Which of the following statements is correct regarding gas costs in Solidity?

// A) Complex operations always have lower gas costs
// B) Operations that read from storage are free
// *C) Writing to storage costs more gas than reading
// D) Functions with more parameters are cheaper
// How do you define an enum in Solidity?

// A) enum Status = {Active, Inactive, Paused};
// *B) enum Status {Active, Inactive, Paused}
// C) Status enum {Active, Inactive, Paused}
// D) Status {Active, Inactive, Paused}
// Which of the following is used to emit an event in Solidity?

// A) emit()
// *B) emit EventName();
// C) throw EventName();
// D) log EventName();
// What is a pure function in Solidity?

// A) A function that modifies state variables
// *B) A function that neither reads nor modifies state variables
// C) A function that sends Ether
// D) A function that is public
// Which of the following keywords is used to transfer ownership of a contract in Solidity?

// A) transferOwnership
// *B) Ownable
// C) onlyOwner
// D) transferOwner
// Which of the following functions is used to transfer ERC-20 tokens?

// *A) transfer()
// B) send()
// C) give()
// D) move()
// Which of the following is a correct declaration of a fixed-point number in Solidity?

// A) fixed256x18 number;
// B) uint256 number;
// *C) Solidity does not support fixed-point numbers yet
// D) fixed256 number;
// What does abi.encodePacked() do in Solidity?

// A) It decodes data
// *B) It encodes data tightly packed
// C) It unpacks data
// D) It returns the gas limit
// Which function is used to retrieve Ether from a contract in Solidity?

// A) sendEther()
// B) retrieveEther()
// C) withdrawEther()
// *D) withdraw()
// What is the purpose of the indexed keyword in Solidity events?

// *A) It allows searching and filtering logs by the indexed parameter
// B) It prevents the event from being emitted
// C) It makes the event private
// D) It is used for sorting data in the event
// Which of the following is true about the external visibility keyword in Solidity?

// A) It makes the function private
// B) It makes the function accessible from within the contract
// *C) It makes the function accessible from other contracts and transactions
// D) It hides the function from other contracts
// What is the purpose of the selfdestruct function in Solidity?

// *A) It destroys the contract and sends the remaining Ether to a specified address
// B) It resets the state variables of the contract
// C) It reverts the contract to its initial state
// D) It freezes the contract
// Which of the following correctly describes the payable keyword in Solidity?

// A) It allows a contract to receive tokens
// *B) It allows a function to receive Ether
// C) It prevents a function from receiving Ether
// D) It converts Ether to tokens
// What does the revert statement do in Solidity?

// A) It logs an error message
// *B) It undoes all state changes and refunds gas
// C) It continues the function execution
// D) It emits an event


// Which of the following is true about Solidity's constructor function?

// *A) It is executed once when the contract is deployed.
// B) It can be called multiple times.
// C) It is executed whenever the contract is called.
// D) It is used to destroy the contract.
// How can you define a dynamic array in Solidity?

// A) uint[10] numbers;
// B) uint[10] memory numbers;
// *C) uint[] numbers;
// D) uint[10] storage numbers;
// What does the assert() function do in Solidity?

// *A) It checks a condition and throws an error if false.
// B) It generates a warning without reverting the transaction.
// C) It transfers Ether to the caller.
// D) It logs a message in the blockchain.
// Which keyword is used to restrict access to certain functions in Solidity?

// A) require
// *B) onlyOwner
// C) transfer
// D) external
// Which of the following is true about the delegatecall function in Solidity?

// A) It calls another contract but keeps the context of the current contract.
// *B) It executes a function from another contract in the context of the caller contract.
// C) It transfers Ether and calls another contract.
// D) It reverts the state changes of the contract.
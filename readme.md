# ToMantle JS SDK

A JavaScript SDK for interacting with ToMantle services across multiple blockchain networks including Base Sepolia, Mantle, and Yellowstone. This SDK provides seamless integration for contract interactions and blockchain explorer functionality.

## Backend Repository
The SDK interacts with the backend services hosted at [ToMantle Backend Repository](https://github.com/priyanshur66/tomantle)

## Installation

```bash
npm install to-mantle-js-sdk
# or
yarn add to-mantle-js-sdk
```

## Usage

### Initialize SDK
```javascript
import { ToMantleSDK } from 'to-mantle-js-sdk';

const sdk = new ToMantleSDK();
```

### Health Check
Check if all services are operational:
```javascript
const isHealthy = await sdk.checkHealth();
console.log('Services healthy:', isHealthy);
```

### Contract Interactions

#### Base Sepolia Network
```javascript
const result = await sdk.executeBaseSepoliaLogic({
  contractAddress: "0x1234...", // Contract address
  contractABI: [...],           // Contract ABI
  functionName: "transfer",     // Function to call
  functionParams: [            // Function parameters
    "0xRecipient...",
    "1000000000"
  ],
  value: "0"                   // ETH value (optional)
});
```

#### Mantle Network
```javascript
// Execute contract on Mantle
const result = await sdk.executeMantleLogic({
  contractAddress: "0x5678...",
  contractABI: [...],
  functionName: "mint",
  functionParams: [100],
  value: "0.1"  // If payable function
});

// Test contract deployment
const testResult = await sdk.executeMantleTestContract();
```

#### Yellowstone Network
```javascript
const result = await sdk.executeYellowstoneLogic({
  contractAddress: "0x9012...",
  contractABI: [...],
  functionName: "stake",
  functionParams: ["0x1234...", "5000"],
  value: "0"
});
```

### Explorer Functions

#### Base Sepolia Explorer
```javascript
// Get account balance
const balance = await sdk.baseExplorer.getAccountBalance("0x1234...");

// Get token transfers
const transfers = await sdk.baseExplorer.getTokenTransfers(
  "0x1234...", 
  {
    startblock: 1000000,
    endblock: 2000000,
    page: 1,
    offset: 10
  }
);

// Get NFT transfers
const nftTransfers = await sdk.baseExplorer.getNFTTransfers(
  "0x1234...",
  {
    contractaddress: "0x5678...",
    page: 1,
    offset: 10
  }
);

// Get internal transactions
const internalTxs = await sdk.baseExplorer.getInternalTransactions(
  "0x1234...",
  {
    startblock: 1000000,
    endblock: 2000000
  }
);
```

#### Mantle Explorer
```javascript
// Get account balance
const balance = await sdk.mantleExplorer.getAccountBalance("0x1234...");

// Get multiple balances
const balances = await sdk.mantleExplorer.getMultipleBalances([
  "0x1234...",
  "0x5678..."
]);

// Get token info
const supply = await sdk.mantleExplorer.getTokenSupply("0x1234...");
const tokenBalance = await sdk.mantleExplorer.getTokenBalance(
  "0x1234...", // Contract address
  "0x5678..."  // Account address
);
```

## Error Handling
The SDK provides consistent error handling across all functions:

```javascript
try {
  const result = await sdk.executeMantleLogic({...});
} catch (error) {
  console.error('Error:', error.message);
  // Error will contain detailed information about the failure
}
```

## Types

### IContractCall
```typescript
interface IContractCall {
    contractAddress: string;
    contractABI: any[];
    functionName: string;
    functionParams: any[];
    value?: string;
}
```

### ITransactionResponse
```typescript
interface ITransactionResponse {
    success: boolean;
    data: any;
    metadata: {
        contractAddress: string;
        functionName: string;
        functionParams: any[];
        value?: string;
        timestamp: string;
        chain?: string;
    };
}
```


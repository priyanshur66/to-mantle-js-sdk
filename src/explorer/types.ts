export interface ExplorerResponse<T> {
    success: boolean;
    data: T;
    timestamp: string;
    error?: string;
}

export interface TokenTransferEvent {
    blockNumber: string;
    timeStamp: string;
    hash: string;
    from: string;
    to: string;
    value: string;
    contractAddress: string;
    tokenName: string;
    tokenSymbol: string;
    tokenDecimal: string;
    gas: string;
    gasPrice: string;
}

export interface Transaction {
    blockHash: string;
    blockNumber: string;
    confirmations: string;
    contractAddress: string;
    cumulativeGasUsed: string;
    from: string;
    gas: string;
    gasPrice: string;
    gasUsed: string;
    hash: string;
    input: string;
    nonce: string;
    timeStamp: string;
    to: string;
    transactionIndex: string;
    value: string;
}

export interface AccountBalance {
    account: string;
    balance: string;
}
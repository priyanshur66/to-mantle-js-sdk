import { TokenTransferEvent, Transaction, AccountBalance } from './types';
export declare class BaseSepoliaExplorer {
    private readonly baseUrl;
    constructor();
    private makeRequest;
    getAccountBalance(address: string): Promise<string>;
    getMultipleBalances(addresses: string[]): Promise<AccountBalance[]>;
    getAccountTransactions(address: string, options?: {
        startblock?: number;
        endblock?: number;
        page?: number;
        offset?: number;
        sort?: 'asc' | 'desc';
    }): Promise<Transaction[]>;
    getTokenTransfers(address: string, options?: {
        contractaddress?: string;
        page?: number;
        offset?: number;
        startblock?: number;
        endblock?: number;
        sort?: 'asc' | 'desc';
    }): Promise<TokenTransferEvent[]>;
    getNFTTransfers(address: string, options?: {
        contractaddress?: string;
        page?: number;
        offset?: number;
        startblock?: number;
        endblock?: number;
        sort?: 'asc' | 'desc';
    }): Promise<TokenTransferEvent[]>;
    getTokenSupply(contractAddress: string): Promise<string>;
    getTokenBalance(contractAddress: string, address: string): Promise<string>;
    getInternalTransactions(address: string, options?: {
        startblock?: number;
        endblock?: number;
        page?: number;
        offset?: number;
        sort?: 'asc' | 'desc';
    }): Promise<Transaction[]>;
    getInternalTransactionsByHash(txhash: string): Promise<Transaction[]>;
}

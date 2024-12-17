import axios from 'axios';
import config from '../config';
import { ExplorerResponse, TokenTransferEvent, Transaction, AccountBalance } from './types';

export class BaseSepoliaExplorer {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = `${config.BASE_SEPOLIA_LIT_SERVER_API_BASE_URL}/explorer/baseSepolia`;
    }

    private async makeRequest<T>(endpoint: string, params: Record<string, any> = {}): Promise<T> {
        try {
            const response = await axios.get<ExplorerResponse<T>>(`${this.baseUrl}${endpoint}`, { params });
            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.error || error.message);
            }
            throw error;
        }
    }

    async getAccountBalance(address: string): Promise<string> {
        return this.makeRequest<string>(`/balance/${address}`);
    }

    async getMultipleBalances(addresses: string[]): Promise<AccountBalance[]> {
        return axios.post(`${this.baseUrl}/balances`, { addresses })
            .then(response => response.data.data);
    }

    async getAccountTransactions(
        address: string,
        options?: {
            startblock?: number;
            endblock?: number;
            page?: number;
            offset?: number;
            sort?: 'asc' | 'desc';
        }
    ): Promise<Transaction[]> {
        return this.makeRequest<Transaction[]>(`/transactions/${address}`, options);
    }

    async getTokenTransfers(
        address: string,
        options?: {
            contractaddress?: string;
            page?: number;
            offset?: number;
            startblock?: number;
            endblock?: number;
            sort?: 'asc' | 'desc';
        }
    ): Promise<TokenTransferEvent[]> {
        return this.makeRequest<TokenTransferEvent[]>(`/token-transfers/${address}`, options);
    }

    async getNFTTransfers(
        address: string,
        options?: {
            contractaddress?: string;
            page?: number;
            offset?: number;
            startblock?: number;
            endblock?: number;
            sort?: 'asc' | 'desc';
        }
    ): Promise<TokenTransferEvent[]> {
        return this.makeRequest<TokenTransferEvent[]>(`/nft-transfers/${address}`, options);
    }

    async getTokenSupply(contractAddress: string): Promise<string> {
        return this.makeRequest<string>(`/token/supply/${contractAddress}`);
    }

    async getTokenBalance(contractAddress: string, address: string): Promise<string> {
        return this.makeRequest<string>(`/token/balance/${contractAddress}/${address}`);
    }

    async getInternalTransactions(
        address: string,
        options?: {
            startblock?: number;
            endblock?: number;
            page?: number;
            offset?: number;
            sort?: 'asc' | 'desc';
        }
    ): Promise<Transaction[]> {
        return this.makeRequest<Transaction[]>(`/internal-transactions/${address}`, options);
    }

    async getInternalTransactionsByHash(txhash: string): Promise<Transaction[]> {
        return this.makeRequest<Transaction[]>(`/internal-tx/${txhash}`);
    }
}

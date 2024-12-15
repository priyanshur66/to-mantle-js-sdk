import mantle from './api/mantle';
import { 
    IContractCall, 
    IChainContractCall,
    ITransactionResponse, 
    SupportedChains 
} from './interface';
import config from './config';
import axios from 'axios';

export class ToMantleSDK {
    private baseURL: string;

    constructor(baseURL?: string) {
        this.baseURL = baseURL || config.API_BASE_URL;
    }

    /**
     * Check if the service is healthy
     */
    async checkHealth(): Promise<boolean> {
        try {
            const { data } = await mantle.checkHealth();
            return data.status === 'healthy';
        } catch (error) {
            console.error('Health check failed:', error);
            return false;
        }
    }

    /**
     * Execute the test contract
     */
    async executeTestContract(): Promise<ITransactionResponse> {
        try {
            const { data } = await mantle.testMantleContract();
            return data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    /**
     * Execute mantle logic 
     */
    async executeMantleLogic(contractCall: IContractCall): Promise<ITransactionResponse> {
        try {
            const { data } = await mantle.executeMantleLogic({
                ...contractCall,
                value: contractCall.value || '0'
            });

            return data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    /**
     * Execute a contract on any supported chain
     */
    async executeChainLogic(
        contractCall: IContractCall,
        targetChain: SupportedChains
    ): Promise<ITransactionResponse> {
        try {
            const { data } = await mantle.executeChainLogic({
                ...contractCall,
                value: contractCall.value || '0',
                targetChain
            });

            return data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    private handleError(error: any): void {
        console.error('ToMantle SDK Error:', error);
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.error || error.message);
        }
        throw error;
    }
}


export type { 
    IContractCall, 
    IChainContractCall, 
    ITransactionResponse, 
    SupportedChains 
};
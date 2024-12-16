import mantle from './api/mantle';
import yellowstone from './api/yellowstone';
import baseSepoila from './api/baseSepoila';
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
    private yellowstoneURL: string;
    private mantleURL: string;


    constructor() {
           
        this.baseURL =  config.BASE_SEPOLIA_LIT_SERVER_API_BASE_URL;
        this.mantleURL =  config.MANTLE_LIT_SERVER_API_BASE_URL;
        this.yellowstoneURL = config.YELLOWSTONE_LIT_SERVER_API_BASE_URL;
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
    async executeMantleTestContract(): Promise<ITransactionResponse> {
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
     * Execute BseSepolia logic
     */
     async executeBaseSepoliaLogic(contractCall: IContractCall): Promise<ITransactionResponse> {
        try {
            const { data } = await baseSepoila.executeBaseSeopoliaLogic({
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
     * Execute yellowstone logic
     */
     async executeYellowstoneLogic(contractCall: IContractCall): Promise<ITransactionResponse> {
        try {
            const { data } = await yellowstone.executeYellowstoneLogic({
                ...contractCall,
                value: contractCall.value || '0'
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
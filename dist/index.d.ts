import { IContractCall, IChainContractCall, ITransactionResponse, SupportedChains } from './interface';
export declare class ToMantleSDK {
    private baseURL;
    constructor(baseURL?: string);
    /**
     * Check if the service is healthy
     */
    checkHealth(): Promise<boolean>;
    /**
     * Execute the test contract
     */
    executeTestContract(): Promise<ITransactionResponse>;
    /**
     * Execute mantle logic
     */
    executeMantleLogic(contractCall: IContractCall): Promise<ITransactionResponse>;
    /**
     * Execute a contract on any supported chain
     */
    executeChainLogic(contractCall: IContractCall, targetChain: SupportedChains): Promise<ITransactionResponse>;
    private handleError;
}
export type { IContractCall, IChainContractCall, ITransactionResponse, SupportedChains };

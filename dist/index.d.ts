import { IContractCall, IChainContractCall, ITransactionResponse, SupportedChains } from './interface';
export declare class ToMantleSDK {
    private baseURL;
    private yellowstoneURL;
    private mantleURL;
    constructor();
    /**
     * Check if the service is healthy
     */
    checkHealth(): Promise<boolean>;
    /**
     * Execute the test contract
     */
    executeMantleTestContract(): Promise<ITransactionResponse>;
    /**
     * Execute mantle logic
     */
    executeMantleLogic(contractCall: IContractCall): Promise<ITransactionResponse>;
    /**
    * Execute BseSepolia logic
    */
    executeBaseSepoliaLogic(contractCall: IContractCall): Promise<ITransactionResponse>;
    /**
    * Execute yellowstone logic
    */
    executeYellowstoneLogic(contractCall: IContractCall): Promise<ITransactionResponse>;
    private handleError;
}
export type { IContractCall, IChainContractCall, ITransactionResponse, SupportedChains };

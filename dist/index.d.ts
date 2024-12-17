import { BaseSepoliaExplorer } from './explorer/baseSepolia';
import { MantleExplorer } from './explorer/mantle';
import { IContractCall, IChainContractCall, ITransactionResponse, SupportedChains } from './interface';
/**
 * ToMantleSDK provides a unified interface for interacting with
 * multiple blockchain networks and their explorers
 */
export declare class ToMantleSDK {
    private readonly baseURL;
    private readonly yellowstoneURL;
    private readonly mantleURL;
    readonly baseExplorer: BaseSepoliaExplorer;
    readonly mantleExplorer: MantleExplorer;
    constructor();
    /**
     * Check if the service is healthy
     * @returns Promise<boolean> indicating service health status
     */
    checkHealth(): Promise<boolean>;
    /**
     * Execute the test Mantle contract
     * @returns Promise<ITransactionResponse>
     */
    executeMantleTestContract(): Promise<ITransactionResponse>;
    /**
     * Execute Mantle contract logic
     * @param contractCall Contract call parameters
     * @returns Promise<ITransactionResponse>
     */
    executeMantleLogic(contractCall: IContractCall): Promise<ITransactionResponse>;
    /**
     * Execute Base Sepolia contract logic
     * @param contractCall Contract call parameters
     * @returns Promise<ITransactionResponse>
     */
    executeBaseSepoliaLogic(contractCall: IContractCall): Promise<ITransactionResponse>;
    /**
     * Execute Yellowstone contract logic
     * @param contractCall Contract call parameters
     * @returns Promise<ITransactionResponse>
     */
    executeYellowstoneLogic(contractCall: IContractCall): Promise<ITransactionResponse>;
    /**
     * Handle and transform errors
     * @param error The error to handle
     */
    private handleError;
}
export type { IContractCall, IChainContractCall, ITransactionResponse, SupportedChains };
export { BaseSepoliaExplorer, MantleExplorer };

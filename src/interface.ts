export interface IContractCall {
    contractAddress: string;
    contractABI: any[];
    functionName: string;
    functionParams: any[];
    value?: string;
}

export interface IChainContractCall extends IContractCall {
    targetChain: SupportedChains;
}

export interface ITransactionResponse {
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

export type SupportedChains = 'mantle' | 'ethereum' | 'baseSepolia' | 'arbitrum' | 'optimism';
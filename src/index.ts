
import mantle from './api/mantle'
import yellowstone from './api/yellowstone'
import baseSepoila from './api/baseSepoila'

import { BaseSepoliaExplorer } from './explorer/baseSepolia'
import { MantleExplorer } from './explorer/mantle'

import { 
    IContractCall, 
    IChainContractCall,
    ITransactionResponse, 
    SupportedChains 
} from './interface'
import config from './config'
import axios from 'axios'

/**
 * ToMantleSDK provides a unified interface for interacting with 
 * multiple blockchain networks and their explorers
 */
export class ToMantleSDK {

    private readonly baseURL: string
    private readonly yellowstoneURL: string
    private readonly mantleURL: string

   
    public readonly baseExplorer: BaseSepoliaExplorer
    public readonly mantleExplorer: MantleExplorer

    constructor() {
 
        this.baseURL = config.BASE_SEPOLIA_LIT_SERVER_API_BASE_URL
        this.mantleURL = config.MANTLE_LIT_SERVER_API_BASE_URL
        this.yellowstoneURL = config.YELLOWSTONE_LIT_SERVER_API_BASE_URL
        this.baseExplorer = new BaseSepoliaExplorer()
        this.mantleExplorer = new MantleExplorer()
    }

    /**
     * Check if the service is healthy
     * @returns Promise<boolean> indicating service health status
     */
    async checkHealth(): Promise<boolean> {
        try {
            const results = await Promise.all([
                mantle.checkHealth(),
                baseSepoila.checkBaseSeopoliaHealth(),
                yellowstone.checkYellowstoneHealth()
            ])
            
            return results.every(({ data }) => data.status === 'healthy')
        } catch (error) {
            console.error('Health check failed:', error)
            return false
        }
    }

    /**
     * Execute the test Mantle contract
     * @returns Promise<ITransactionResponse>
     */
    async executeMantleTestContract(): Promise<ITransactionResponse> {
        try {
            const { data } = await mantle.testMantleContract()
            return data
        } catch (error) {
            this.handleError(error)
            throw error
        }
    }

    /**
     * Execute Mantle contract logic
     * @param contractCall Contract call parameters
     * @returns Promise<ITransactionResponse>
     */
    async executeMantleLogic(contractCall: IContractCall): Promise<ITransactionResponse> {
        try {
            const { data } = await mantle.executeMantleLogic({
                ...contractCall,
                value: contractCall.value || '0'
            })
            return data
        } catch (error) {
            this.handleError(error)
            throw error
        }
    }

    /**
     * Execute Base Sepolia contract logic
     * @param contractCall Contract call parameters
     * @returns Promise<ITransactionResponse>
     */
    async executeBaseSepoliaLogic(contractCall: IContractCall): Promise<ITransactionResponse> {
        try {
            const { data } = await baseSepoila.executeBaseSeopoliaLogic({
                ...contractCall,
                value: contractCall.value || '0'
            })
            return data
        } catch (error) {
            this.handleError(error)
            throw error
        }
    }

    /**
     * Execute Yellowstone contract logic
     * @param contractCall Contract call parameters
     * @returns Promise<ITransactionResponse>
     */
    async executeYellowstoneLogic(contractCall: IContractCall): Promise<ITransactionResponse> {
        try {
            const { data } = await yellowstone.executeYellowstoneLogic({
                ...contractCall,
                value: contractCall.value || '0'
            })
            return data
        } catch (error) {
            this.handleError(error)
            throw error
        }
    }

    /**
     * Handle and transform errors
     * @param error The error to handle
     */
    private handleError(error: any): void {
        console.error('ToMantle SDK Error:', error)
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.error || error.message)
        }
        throw error
    }
}

export type { 
    IContractCall, 
    IChainContractCall, 
    ITransactionResponse, 
    SupportedChains 
}

export { BaseSepoliaExplorer, MantleExplorer }
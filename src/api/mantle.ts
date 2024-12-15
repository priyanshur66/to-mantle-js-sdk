import axios from 'axios';
import config from '../config';
import { IContractCall, IChainContractCall, ITransactionResponse } from '../interface';

export default {
    executeMantleLogic: async (contractCall: IContractCall) => {
        return axios.post<ITransactionResponse>(
            `${config.API_BASE_URL}/execute-contract`,
            contractCall
        );
    },

    executeChainLogic: async (contractCall: IChainContractCall) => {
        return axios.post<ITransactionResponse>(
            `${config.API_BASE_URL}/execute-chain-contract`,
            contractCall
        );
    },

    testMantleContract: async () => {
        return axios.get<ITransactionResponse>(
            `${config.API_BASE_URL}/test-contract`
        );
    },

    checkHealth: async () => {
        return axios.get(`${config.API_BASE_URL}/health`);
    }
};
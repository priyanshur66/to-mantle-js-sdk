import axios from 'axios';
import config from '../config';
import { IContractCall, IChainContractCall, ITransactionResponse } from '../interface';

export default {
    executeMantleLogic: async (contractCall: IContractCall) => {
        return axios.post<ITransactionResponse>(
            `${config.MANTLE_LIT_SERVER_API_BASE_URL}/execute-contract`,
            contractCall
        );
    },

    testMantleContract: async () => {
        return axios.get<ITransactionResponse>(
            `${config.MANTLE_LIT_SERVER_API_BASE_URL}/test-contract`
        );
    },

    checkHealth: async () => {
        return axios.get(`${config.MANTLE_LIT_SERVER_API_BASE_URL}/health`);
    }
};
import axios from 'axios';
import config from '../config';
import { IContractCall, ITransactionResponse } from '../interface';

export default {
    executeBaseSeopoliaLogic: async (contractCall: IContractCall) => {
        return axios.post<ITransactionResponse>(
            `${config.BASE_SEPOLIA_LIT_SERVER_API_BASE_URL}/execute-contract`,
            contractCall
        );
    },

    testBaseSeopoliaContract: async () => {
        return axios.get<ITransactionResponse>(
            `${config.BASE_SEPOLIA_LIT_SERVER_API_BASE_URL}/test-contract`
        );
    },

    checkBaseSeopoliaHealth: async () => {
        return axios.get(`${config.BASE_SEPOLIA_LIT_SERVER_API_BASE_URL}/health`);
    }
};
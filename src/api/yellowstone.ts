import axios from 'axios';
import config from '../config';
import { IContractCall, ITransactionResponse } from '../interface';

export default {
    executeYellowstoneLogic: async (contractCall: IContractCall) => {
        return axios.post<ITransactionResponse>(
            `${config.YELLOWSTONE_LIT_SERVER_API_BASE_URL}/execute-contract`,
            contractCall
        );
    },

   

    testYellowstoneContract: async () => {
        return axios.get<ITransactionResponse>(
            `${config.YELLOWSTONE_LIT_SERVER_API_BASE_URL}/test-contract`
        );
    },

    checkYellowstoneHealth: async () => {
        return axios.get(`${config.YELLOWSTONE_LIT_SERVER_API_BASE_URL}/health`);
    }
};
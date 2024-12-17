import { IContractCall, ITransactionResponse } from '../interface';
declare const _default: {
    executeMantleLogic: (contractCall: IContractCall) => Promise<import("axios").AxiosResponse<ITransactionResponse, any>>;
    testMantleContract: () => Promise<import("axios").AxiosResponse<ITransactionResponse, any>>;
    checkHealth: () => Promise<import("axios").AxiosResponse<any, any>>;
};
export default _default;

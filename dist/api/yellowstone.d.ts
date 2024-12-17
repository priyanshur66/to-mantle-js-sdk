import { IContractCall, ITransactionResponse } from '../interface';
declare const _default: {
    executeYellowstoneLogic: (contractCall: IContractCall) => Promise<import("axios").AxiosResponse<ITransactionResponse, any>>;
    testYellowstoneContract: () => Promise<import("axios").AxiosResponse<ITransactionResponse, any>>;
    checkYellowstoneHealth: () => Promise<import("axios").AxiosResponse<any, any>>;
};
export default _default;

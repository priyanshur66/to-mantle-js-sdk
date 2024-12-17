import { IContractCall, ITransactionResponse } from '../interface';
declare const _default: {
    executeBaseSeopoliaLogic: (contractCall: IContractCall) => Promise<import("axios").AxiosResponse<ITransactionResponse, any>>;
    testBaseSeopoliaContract: () => Promise<import("axios").AxiosResponse<ITransactionResponse, any>>;
    checkBaseSeopoliaHealth: () => Promise<import("axios").AxiosResponse<any, any>>;
};
export default _default;

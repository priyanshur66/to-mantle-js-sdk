"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSepoliaExplorer = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
class BaseSepoliaExplorer {
    constructor() {
        this.baseUrl = `${config_1.default.BASE_SEPOLIA_LIT_SERVER_API_BASE_URL}/explorer/baseSepolia`;
    }
    makeRequest(endpoint, params = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${this.baseUrl}${endpoint}`, { params });
                return response.data.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error)) {
                    throw new Error(((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) || error.message);
                }
                throw error;
            }
        });
    }
    getAccountBalance(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest(`/balance/${address}`);
        });
    }
    getMultipleBalances(addresses) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.post(`${this.baseUrl}/balances`, { addresses })
                .then(response => response.data.data);
        });
    }
    getAccountTransactions(address, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest(`/transactions/${address}`, options);
        });
    }
    getTokenTransfers(address, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest(`/token-transfers/${address}`, options);
        });
    }
    getNFTTransfers(address, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest(`/nft-transfers/${address}`, options);
        });
    }
    getTokenSupply(contractAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest(`/token/supply/${contractAddress}`);
        });
    }
    getTokenBalance(contractAddress, address) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest(`/token/balance/${contractAddress}/${address}`);
        });
    }
    getInternalTransactions(address, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest(`/internal-transactions/${address}`, options);
        });
    }
    getInternalTransactionsByHash(txhash) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest(`/internal-tx/${txhash}`);
        });
    }
}
exports.BaseSepoliaExplorer = BaseSepoliaExplorer;

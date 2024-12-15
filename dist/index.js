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
exports.ToMantleSDK = void 0;
const mantle_1 = __importDefault(require("./api/mantle"));
const config_1 = __importDefault(require("./config"));
const axios_1 = __importDefault(require("axios"));
class ToMantleSDK {
    constructor(baseURL) {
        this.baseURL = baseURL || config_1.default.API_BASE_URL;
    }
    /**
     * Check if the service is healthy
     */
    checkHealth() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield mantle_1.default.checkHealth();
                return data.status === 'healthy';
            }
            catch (error) {
                console.error('Health check failed:', error);
                return false;
            }
        });
    }
    /**
     * Execute the test contract
     */
    executeTestContract() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield mantle_1.default.testMantleContract();
                return data;
            }
            catch (error) {
                this.handleError(error);
                throw error;
            }
        });
    }
    /**
     * Execute mantle logic
     */
    executeMantleLogic(contractCall) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield mantle_1.default.executeMantleLogic(Object.assign(Object.assign({}, contractCall), { value: contractCall.value || '0' }));
                return data;
            }
            catch (error) {
                this.handleError(error);
                throw error;
            }
        });
    }
    /**
     * Execute a contract on any supported chain
     */
    executeChainLogic(contractCall, targetChain) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield mantle_1.default.executeChainLogic(Object.assign(Object.assign({}, contractCall), { value: contractCall.value || '0', targetChain }));
                return data;
            }
            catch (error) {
                this.handleError(error);
                throw error;
            }
        });
    }
    handleError(error) {
        var _a, _b;
        console.error('ToMantle SDK Error:', error);
        if (axios_1.default.isAxiosError(error)) {
            throw new Error(((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) || error.message);
        }
        throw error;
    }
}
exports.ToMantleSDK = ToMantleSDK;

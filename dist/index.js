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
const yellowstone_1 = __importDefault(require("./api/yellowstone"));
const baseSepoila_1 = __importDefault(require("./api/baseSepoila"));
const config_1 = __importDefault(require("./config"));
const axios_1 = __importDefault(require("axios"));
class ToMantleSDK {
    constructor() {
        this.baseURL = config_1.default.BASE_SEPOLIA_LIT_SERVER_API_BASE_URL;
        this.mantleURL = config_1.default.MANTLE_LIT_SERVER_API_BASE_URL;
        this.yellowstoneURL = config_1.default.YELLOWSTONE_LIT_SERVER_API_BASE_URL;
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
    executeMantleTestContract() {
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
    * Execute BseSepolia logic
    */
    executeBaseSepoliaLogic(contractCall) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield baseSepoila_1.default.executeBaseSeopoliaLogic(Object.assign(Object.assign({}, contractCall), { value: contractCall.value || '0' }));
                return data;
            }
            catch (error) {
                this.handleError(error);
                throw error;
            }
        });
    }
    /**
    * Execute yellowstone logic
    */
    executeYellowstoneLogic(contractCall) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield yellowstone_1.default.executeYellowstoneLogic(Object.assign(Object.assign({}, contractCall), { value: contractCall.value || '0' }));
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

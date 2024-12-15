"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
exports.default = {
    fetchTodo: (todoIndex) => {
        return axios_1.default.get(`${config_1.default.JSON_PLACEHOLDER_API_BASE_URL}/todos/${todoIndex}`);
    }
};

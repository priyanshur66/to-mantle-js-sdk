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
exports.JSONPlaceholderSDK = void 0;
const todos_1 = __importDefault(require("./api/todos"));
class JSONPlaceholderSDK {
    constructor() {
        this.fetchTodo = (todoIndex) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: fetchedTodo } = yield todos_1.default.fetchTodo(todoIndex);
                return fetchedTodo;
            }
            catch (error) {
                throw error;
            }
        });
        // Constructor can be used for initialization if needed
    }
}
exports.JSONPlaceholderSDK = JSONPlaceholderSDK;

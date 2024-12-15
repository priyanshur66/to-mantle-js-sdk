import { IFetchTodo } from './interface';
export declare class JSONPlaceholderSDK {
    constructor();
    fetchTodo: (todoIndex: number) => Promise<IFetchTodo>;
}

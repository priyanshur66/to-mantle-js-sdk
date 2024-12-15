import todos from './api/todos'
import { IFetchTodo } from './interface'

export class JSONPlaceholderSDK {
    constructor() {
        // Constructor can be used for initialization if needed
    }

    fetchTodo = async (todoIndex: number) => {
        try {
            const { data: fetchedTodo }: { data: IFetchTodo } = await todos.fetchTodo(todoIndex)
            return fetchedTodo
        } catch (error) {
            throw error
        }
    }
}
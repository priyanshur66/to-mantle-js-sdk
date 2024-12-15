import axios from 'axios'
import config from '../config'

export default {
    fetchTodo: (todoIndex: number) => {
        return axios.get(`${config.JSON_PLACEHOLDER_API_BASE_URL}/todos/${todoIndex}`)
    }
}
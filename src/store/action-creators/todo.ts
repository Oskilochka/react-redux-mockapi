import {TodoAction, TodoActionTypes} from "../../types/todo";
import {Dispatch} from "redux";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODO})
            const response = await axios.get(url, {params: {_page: page, _limit: limit}})
            dispatch({
                type: TodoActionTypes.FETCH_TODO_SUCCESS,
                payload: response.data
            })
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODO_ERROR,
                payload: 'Some error with loading todo list'
            })
        }
    }
}

export const setTodoPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}

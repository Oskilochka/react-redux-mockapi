import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get(url)
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data
            })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Some error with loading users'
            })
        }
    }
}

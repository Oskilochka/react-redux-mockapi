import { Dispatch } from "redux";
import axios from "axios";
import { UserAction, UserActionTypes } from "types/user";

const url = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () =>
  async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(url);
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Some error with loading users",
      });
    }
  };

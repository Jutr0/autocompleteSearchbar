import { userActions } from "./userActions";
import axios from "axios";

export const updateUsers = (users) => ({
  type: userActions.UPDATE_USERS,
  payload: { users },
});

export const setLoading = (loading) => ({
  type: userActions.LOADING_UPDATE_USERS,
  payload: { loading },
});

export const throwError = (error) => ({
  type: userActions.ERROR_UPDATE_USERS,
  payload: { error },
});

export const getUsersFromAPI = () => (dispatch) => {
  dispatch(setLoading(true));

  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      dispatch(
        updateUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)))
      );
      dispatch(setLoading(false));
    })
    .catch((e) => {
      dispatch(throwError(e));
      dispatch(setLoading(false));
      console.error(e);
    });
};

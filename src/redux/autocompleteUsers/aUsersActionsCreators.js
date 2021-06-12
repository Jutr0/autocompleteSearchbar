import { aUsersActions } from "./aUsersActions";

export const updateAUsers = (aUsers) => {
  return {
    type: aUsersActions.UPDATE_USERS,
    payload: aUsers,
  };
};

export const updateCurrIndex = (currIndex) => {
    return {
        type:aUsersActions.UPDATE_CURRENT_INDEX,
        payload: currIndex
    }
}

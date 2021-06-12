import { aUsersActions } from "./aUsersActions";

export const updateAUsers = (aUsers) => {
  return {
    type: aUsersActions.UPDATE_USERS,
    payload: aUsers,
  };
};

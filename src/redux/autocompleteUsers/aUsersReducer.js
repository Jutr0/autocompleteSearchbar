import { aUsersActions } from "./aUsersActions";

const INITIAL_STATE = {
  aUsers: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case aUsersActions.UPDATE_USERS: {
      return {aUsers:action.payload};
    }
    default:
      return state;
  }
};

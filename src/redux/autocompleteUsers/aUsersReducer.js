import { aUsersActions } from "./aUsersActions";

const INITIAL_STATE = {
  aUsers: [],
  currIndex:0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case aUsersActions.UPDATE_USERS: {
      return {...state, aUsers: action.payload };
    }
    case aUsersActions.UPDATE_CURRENT_INDEX:{
        return {...state, currIndex:action.payload}
    }
    default:
      return state;
  }
};

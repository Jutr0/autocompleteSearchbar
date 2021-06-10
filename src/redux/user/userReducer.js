import { userActions } from "./userActions";

const INITIAL_STATE = {
  loading: true,
  users: [],
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActions.UPDATE_USERS: {
      return { ...state, users: action.payload.users };
    }
    case userActions.LOADING_UPDATE_USERS: {
      return { ...state, loading: action.payload.loading };
    }
    case userActions.ERROR_UPDATE_USERS: {
      return { ...state, error: action.payload.error };
    }
    default:
      return state;
  }
};

export default userReducer;

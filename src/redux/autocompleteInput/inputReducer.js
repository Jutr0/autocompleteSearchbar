import { inputActions } from "./inputActions";

const INITIAL_STATE = {
  autocompleteInput: "",
};

const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case inputActions.UPDATE_INPUT: {
      return { autocompleteInput: action.payload.autocompleteInput };
    }
    default:
      return state;
  }
};

export default inputReducer;

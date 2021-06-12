import { inputActions } from "./inputActions";

export const updateInput = (update) => {
  return {
    type: inputActions.UPDATE_INPUT,
    payload: {
      autocompleteInput: update,
    },
  };
};

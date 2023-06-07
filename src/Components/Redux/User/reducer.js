import { SET_USER, CLEAR_USER } from "./action";

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  if (action.type === SET_USER) {
    return {
      ...state,
      user: action.payload,
    };
  }

  if (action.type === CLEAR_USER) {
    return {
      ...state,
      user: null,
    };
  }

  return state;
};

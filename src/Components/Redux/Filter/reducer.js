import { FILTER_OPTIONS } from "./action";

export const initalFilter = "All";

export const reducer = (state = initalFilter, action) => {
  if (action.type === FILTER_OPTIONS) {
    return action.payload;
  }
  return state;
};
export default reducer;

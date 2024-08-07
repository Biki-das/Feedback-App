import { SORT_OPTIONS } from "./action";

export const initialOption = "Most Upvotes";

export const reducer = (
  state = initialOption,
  action: { type: "SORT_OPTIONS"; payload: string }
) => {
  if (action.type === SORT_OPTIONS) {
    return action.payload;
  }

  return state;
};

export default reducer;

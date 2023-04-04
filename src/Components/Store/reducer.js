import {SORT_OPTION_UPDATED} from './action'
export const initalSortOption = " Upvotes"


export const reducer = (state = initalSortOption, action) => {
   if (action.type === SORT_OPTION_UPDATED) {
    return action.payload
   }
   return state
}

export default reducer;
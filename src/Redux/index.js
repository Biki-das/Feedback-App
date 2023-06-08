import { combineReducers, createStore } from "redux";
import filterReducer from "./Filter/reducer";
import sortReducer from "./Sort/reducer";
import { userReducer } from "./User/reducer";

const reducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  currentUser: userReducer,
});

// Get the persisted state from localStorage
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

// Create the store with the persisted state
export const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Subscribe to store changes and save the state to localStorage
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;

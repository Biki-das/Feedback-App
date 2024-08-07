import { combineReducers, createStore } from "redux";
import filterReducer from "./Filter/reducer";
import sortReducer from "./Sort/reducer";
import { userReducer } from "./User/reducer";

const reducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  currentUser: userReducer,
});

function getlocalReduxStorage(): string {
  let value = localStorage.getItem("reduxState");
  if (value === null || value === undefined) {
    throw new Error("local storage item is missing");
  }
  return value;
}

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(getlocalReduxStorage())
  : {};

export const store = createStore(reducer, persistedState);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;

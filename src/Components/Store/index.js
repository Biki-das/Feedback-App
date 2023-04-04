import {createStore} from 'redux'
import sortOptionReducer from './reducer'

export const store = createStore(sortOptionReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
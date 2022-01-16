import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import singleBookReducer from "./singleBook";
import booksReducer from "./books";
<<<<<<< HEAD
import stockReducer from "./stock";
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'

//add reducers here! Don't forget to import!

const reducer = combineReducers({ auth, booksReducer, singleBookReducer, stockReducer });
=======
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import usersReducer from "./users";

//add reducers here! Don't forget to import!

const reducer = combineReducers({
  auth,
  booksReducer,
  singleBookReducer,
  usersReducer,
});
>>>>>>> 628d3f0545b83301123da94819473f4bafa1d644
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";

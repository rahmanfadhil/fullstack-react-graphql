import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import counterReducer from "./reducers/counterReducer";

export interface IReduxState {
  counter: number;
  form: any;
}

const reducers = combineReducers<IReduxState>({
  counter: counterReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(logger, thunk, promise()));

export default store;

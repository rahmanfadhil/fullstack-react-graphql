import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware
} from "redux";
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

const middlewares: Middleware[] = [
  process.env.NODE_ENV !== "production" ? logger : null,
  thunk,
  promise()
].filter(Boolean);
const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
);

export default store;

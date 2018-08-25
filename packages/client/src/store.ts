import { createStore, Reducer, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";

export interface IReduxState {
  counter: number;
}

const reducers = combineReducers<IReduxState>({
  counter: counterReducer
});

const store = createStore(reducers);

export default store;

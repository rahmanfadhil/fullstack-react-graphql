import { Reducer } from "redux";
import { DECREMENT, INCREMENT } from "../types";

const reducer: Reducer = (state = 0, { type }) => {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;

import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IReduxState } from "../store";
import { increaseCounter, decreaseCounter } from "../actions/counterActions";

interface IProps {
  dispatch: Dispatch;
  counter: number;
  increase: () => void;
  decrease: () => void;
}

const Counter = (props: IProps) => (
  <div>
    <h1>Counter</h1>
    {props.counter}
    <hr />
    <button onClick={props.increase}>INCREASE</button>
    <button onClick={props.decrease}>DECREASE</button>
  </div>
);

export default connect(
  ({ counter }: IReduxState) => ({ counter }),
  dispatch => ({
    increase: () => increaseCounter(dispatch),
    decrease: () => decreaseCounter(dispatch)
  })
)(Counter as any);

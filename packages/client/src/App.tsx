import * as React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";
import About from "./components/About";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <h1>Hello World</h1>
            <Link to="/">Home</Link> <Link to="/about">About</Link>
            <hr />
            <Route path="/" exact={true} component={Counter} />
            <Route path="/about" component={About} />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;

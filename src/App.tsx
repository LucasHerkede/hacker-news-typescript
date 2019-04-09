import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import StoryList from "./components/StoryList";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

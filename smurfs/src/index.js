import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer/reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

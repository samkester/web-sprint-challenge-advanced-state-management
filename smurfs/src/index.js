import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import thunk from "redux-thunk";

import reducer from "./state/reducers/smurfReducer";
import theme from "./theme";

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
, document.getElementById("root"));

import  React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";


ReactDOM.render(
    <React.Fragment>
        <App/>
    </React.Fragment>,
    document.getElementById("root")
);

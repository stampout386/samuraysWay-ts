import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {RootStateType} from "./redux/state";

export function rerenderEntireTree(state: RootStateType) {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
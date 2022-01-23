import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RootStateType, store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


function rerenderEntireTree(state: RootStateType) {

    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store._state);
store.subscribe(rerenderEntireTree)

reportWebVitals();

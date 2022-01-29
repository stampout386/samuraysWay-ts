import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RootStateType, store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";


function rerenderEntireTree(state: RootStateType) {
    console.log(store.getState())

    ReactDOM.render(
        <React.StrictMode>
            <App store={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

reportWebVitals();

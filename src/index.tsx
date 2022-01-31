import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RootStateType, store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";


function rerenderEntireTree(state: RootStateType) {


    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
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

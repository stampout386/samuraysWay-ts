import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./rerender";
import {state} from "./redux/state";


rerenderEntireTree(state);


reportWebVitals();

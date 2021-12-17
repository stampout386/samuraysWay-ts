import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostDataType = {
    id: number
    message: string
    like: number
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type PostDataPropsType = {
    postData: Array<PostDataType>
}
export type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export type StatePropsType = {
    postData: Array<PostDataType>
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

let state: StatePropsType = {
    postData: [
        {
            id: 1,
            message: "Hello,how are you?",
            like: 15

        },
        {
            id: 2,
            message: "This is my first post!",
            like: 40

        },
        {
            id: 3,
            message: "This is my second post,I like it!",
            like: 105

        }
    ],
    dialogsData: [
        {id: 1, name: 'Mike'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Kris'},
        {id: 4, name: 'Helga'},
        {id: 5, name: 'Stasy'},
        {id: 6, name: 'Natali'},
    ],
    messagesData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "You are calling me?"},
        {id: 4, message: "i didn't hear,sorry"},
    ]

}


ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={state.dialogsData} messagesData={state.messagesData} postData={state.postData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

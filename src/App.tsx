import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";

import {
    StoreType,
} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    const state = props.store.getState();
    return (

        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebarPage={state.sidebarPage}/>
                <div className='content'>
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile profilePage={state.profilePage}
                                                 addPostCallBack={props.store.addPost.bind(props.store)}
                                                 changeNewPostTextCallBack={props.store.changeNewPostTextCallBack.bind(props.store)}/>}/>
                        <Route path={'/dialogs'}
                               element={<Dialogs dialogsPage={state.dialogsPage}
                                                 addMessageCallBack={props.store.addMessage.bind(props.store)}
                                                 changeNewMessageTextCallBack={props.store.changeNewMessageTextCallBack.bind(props.store)}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}


function News() {
    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                    alt=""/>
            </div>
            News
        </div>)
}

function Music() {
    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                    alt=""/>
            </div>
            Music
        </div>)
}

function Settings() {
    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                    alt=""/>
            </div>
            Settings
        </div>)
}

export default App;

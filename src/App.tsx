import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";

import {
    addMessage,
    addPost,
    changeNewMessageTextCallBack,
    changeNewPostTextCallBack,
    RootStateType,
} from "./redux/state";

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {
    return (

        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebarPage={props.state.sidebarPage}/>
                <div className='content'>
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile profilePage={props.state.profilePage} addPostCallBack={addPost}
                                                 changeNewPostTextCallBack={changeNewPostTextCallBack}/>}/>
                        <Route path={'/dialogs'}
                               element={<Dialogs dialogsPage={props.state.dialogsPage} addMessageCallBack={addMessage}
                                                 changeNewMessageTextCallBack={changeNewMessageTextCallBack}/>}/>
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

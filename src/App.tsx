import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";

import {ActionType, RootStateType, StoreType,} from "./redux/store";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

type AppPropsType = {
    store: RootStateType
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {
    const state = props.store;
    return (

        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebarPage={state.sidebarPage}/>
                <div className='content'>
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile profilePage={state.profilePage}
                                                 dispatch={props.dispatch}/>}/>
                        <Route path={'/dialogs'}
                               element={<Dialogs dialogsPage={state.dialogsPage}
                                                 dispatch={props.dispatch}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;

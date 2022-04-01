import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";

import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App() {


    return (
        <div className='app-wrapper'>
            <Header/>
            <NavbarContainer/>
            <div className='content'>
                <Switch>
                    <Route path={'/profile/:userId?'}
                           component={ProfileContainer}/>
                    <Route path={'/dialogs'}
                           component={DialogsContainer}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/users'} component={UsersContainer}/>
                </Switch>
            </div>

        </div>

    );
}


export default App;

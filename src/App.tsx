import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";

import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthLoginThunkCreator} from "./redux/authReducer";
import {compose} from "redux";


class App extends React.Component <any> {
    componentDidMount() {
        this.props.getAuthLoginThunkCreator()
    }

    render() {
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='content'>
                    <Switch>
                        <Route path={'/profile/:userId?'}
                               component={ProfileContainer}/>
                        <Route path={'/dialogs'}
                               component={DialogsContainer}/>
                        <Route path={'/users'} component={UsersContainer}/>
                        <Route path={'/news'} component={News}/>
                        <Route path={'/music'} component={Music}/>
                        <Route path={'/settings'} component={Settings}/>
                        <Route path={'/login'} component={LoginContainer}/>

                    </Switch>
                </div>

            </div>

        );
    }
}


export default compose<React.ComponentType>(
    withRouter,
    connect(null, {getAuthLoginThunkCreator})
)(App);

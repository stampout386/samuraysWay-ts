import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (

        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/messages'} element={<Messages/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

function Messages() {
    return <div>Messages</div>
}

function News() {
    return <div>News</div>
}

function Music() {
    return <div>Music</div>
}

function Settings() {
    return <div>Settings</div>
}

export default App;

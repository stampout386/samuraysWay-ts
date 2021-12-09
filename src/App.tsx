import React from 'react';
import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://i.pinimg.com/originals/09/17/04/0917045fcee27f48e768680d1f800577.jpg" alt=""/>
            </header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Messeges</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>

            </nav>
            <div className='content'>
                <div>
                    <img
                        src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                        alt=""/>
                </div>
                <div>ava+description</div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

import React from "react";
import css from './Navbar.module.css';
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <nav className={css.nav}>
            <div className={css.item}><Link to={'/profile'}>Profile</Link></div>
            <div className={css.item}><Link to={'/messages'}>Messages</Link></div>
            <div className={css.item}><Link to={'/news'}>News</Link></div>
            <div className={css.item}><Link to={'/music'}>Music</Link></div>
            <div className={css.item}><Link to={'/settings'}>Settings</Link></div>
        </nav>
    )
}
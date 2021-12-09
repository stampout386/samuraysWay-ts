import React from "react";
import css from './Navbar.module.css';


export function Navbar() {
    return (
        <nav className={css.nav}>
            <div className={`${css.item} ${css.active}`}><a>Profile</a></div>
            <div className={css.item}><a>Messeges</a></div>
            <div className={css.item}><a>News</a></div>
            <div className={css.item}><a>Music</a></div>
            <div className={css.item}><a>Settings</a></div>
        </nav>
    )
}
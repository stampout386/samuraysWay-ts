import React from "react";
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {SideBarPropsType} from "../../redux/store";

export function Navbar(props: SideBarPropsType) {

    let friendsRenderArray = props.sidebarPage.friendsData.map(item => {
        return (
            <div key={item.id} className={css.friendsAva}><img src={item.src} alt=""/><span>{item.name}</span></div>
        )

    })

    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to={'/profile'}  className={css.item}
                         activeClassName={css.active}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/dialogs'}  className={css.item}
                         activeClassName={css.active}>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/news'}  className={css.item}
                         activeClassName={css.active}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/music'}  className={css.item}
                         activeClassName={css.active}>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/settings'} className={css.item}
                         activeClassName={css.active}>Settings</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/users'}  className={css.item}
                         activeClassName={css.active}>Users</NavLink>
            </div>

            <div className={css.friends}>
                <h3>Friends</h3>
                <div className={css.friendsAvaGrid}>
                    {friendsRenderArray}
                </div>

            </div>
        </nav>
    )
}
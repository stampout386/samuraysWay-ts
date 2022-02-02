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
                <NavLink to={'/profile'}
                         className={({isActive}) => (isActive ? css.active : css.item)}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/dialogs'}
                         className={({isActive}) => (isActive ? css.active : css.item)}>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/news'}
                         className={({isActive}) => (isActive ? css.active : css.item)}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/music'}
                         className={({isActive}) => (isActive ? css.active : css.item)}>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/settings'}
                         className={({isActive}) => (isActive ? css.active : css.item)}>Settings</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to={'/users'}
                         className={({isActive}) => (isActive ? css.active : css.item)}>Users</NavLink>
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
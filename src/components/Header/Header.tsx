import React from "react";
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

export function Header(props: any) {
    const logoutClick = () => {
        console.log(props)
        props.logoutThunkCreator()
    }
    return (
        <header className={css.header}>
            <NavLink to={'/profile'}>
                <img src="https://i.pinimg.com/originals/09/17/04/0917045fcee27f48e768680d1f800577.jpg" alt=""/>
            </NavLink>

            <div className={css.login}>
                {props.auth.isAuth ?


                    <div className={css.authUser}>
                        <div>login: {props.auth.login}</div>
                        <div>email:{props.auth.email}</div>

                            <button className={css.logoutButton} onClick={logoutClick}>Logout</button>

                    </div>
                    : <NavLink to={'/login'} className={css.login}>Login</NavLink>
                }

            </div>
        </header>
    )
}
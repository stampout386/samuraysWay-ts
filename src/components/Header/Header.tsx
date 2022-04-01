import React from "react";
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

export function Header(props: any) {
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

                    </div>
                    : <NavLink to={'/login'} className={css.login}>Login</NavLink>

                }

            </div>
        </header>
    )
}
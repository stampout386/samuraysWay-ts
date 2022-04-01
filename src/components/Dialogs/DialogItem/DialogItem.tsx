import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id: number
    name: string
    src: string
}

export function DialogItem(props: DialogItemPropsType) {

    return (
        <div className={s.dialog}>
            <div className={s.ava}>
                <img src={props.src} alt=""/>
            </div>

            <div className={s.name}>
                <NavLink to={`/dialogs/${props.id}`}
                         activeClassName={s.active}>{props.name}</NavLink>
            </div>

        </div>
    )
}
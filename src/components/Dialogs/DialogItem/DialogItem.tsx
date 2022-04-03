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

            <div className={s.nameDiv}>
                <NavLink to={`/dialogs/${props.id}`} className={s.name}
                         activeClassName={s.active}>{props.name}</NavLink>
            </div>

        </div>
    )
}
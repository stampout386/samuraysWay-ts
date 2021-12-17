import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id: number
    name: string
}

export function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={s.dialog}><NavLink to={`/dialogs/${props.id}`}
                                           className={({isActive}) => (isActive ? s.active : s.item)}>{props.name}</NavLink>
        </div>
    )
}
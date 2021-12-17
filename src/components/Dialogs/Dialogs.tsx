import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}
type MessagePropsType = {
    message: string
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={s.dialog}><NavLink to={`/dialogs/${props.id}`}
                                           className={({isActive}) => (isActive ? s.active : s.item)}>{props.name}</NavLink>
        </div>
    )
}

function Message(props: MessagePropsType) {
    return <div className={s.message}>{props.message}</div>
}

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id={1} name='Mike'/>
                <DialogItem id={2} name='Kate'/>
                <DialogItem id={3} name='Kris'/>
                <DialogItem id={4} name='Helga'/>
                <DialogItem id={5} name='Stasy'/>
                <DialogItem id={6} name='Natali'/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yes you are beach?'}/>
            </div>
        </div>)
}
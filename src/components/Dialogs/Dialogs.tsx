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
    let dialogsData = [
        {id: 1, name: 'Mike'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Kris'},
        {id: 4, name: 'Helga'},
        {id: 5, name: 'Stasy'},
        {id: 6, name: 'Natali'},
    ]

    let dialogsRenderArray = dialogsData.map(item => {
        return (
            <li>
                <DialogItem id={item.id} name={item.name}/>
            </li>
        )
    })

    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "You are calling me?"},
        {id: 4, message: "i didn't hear,sorry"},
    ];

    let messagesRenderArray = messagesData.map(item => {
        return (
            <Message message={item.message}/>
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <ul>
                    {dialogsRenderArray}
                </ul>

            </div>
            <div className={s.messages}>
                {messagesRenderArray}
            </div>
        </div>)
}
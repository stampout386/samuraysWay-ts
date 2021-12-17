import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";




export function Dialogs(props:DialogsPageType) {


    let dialogsRenderArray = props.dialogsData.map(item => {
        return (
            <li>
                <DialogItem id={item.id} name={item.name}/>
            </li>
        )
    })
    let messagesRenderArray = props.messagesData.map(item => {
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
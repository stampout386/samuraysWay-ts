import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPagePropsType} from "../../redux/state";


export function Dialogs(props: DialogsPagePropsType) {


    let dialogsRenderArray = props.dialogsPage.dialogsData.map(item => {
        return (
            <DialogItem id={item.id} name={item.name} src={item.src}/>

        )
    })
    let messagesRenderArray = props.dialogsPage.messagesData.map(item => {
        return (
            <Message message={item.message}/>
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsRenderArray}
            </div>
            <div className={s.messages}>
                {messagesRenderArray}
            </div>
        </div>)
}
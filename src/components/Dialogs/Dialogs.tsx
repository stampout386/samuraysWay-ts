import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogsPagePropsType,
} from "../../redux/state";
import {addMessageAC, onChangeNewMessageTextAC} from "../../redux/dialogsReduser";


export function Dialogs(props: DialogsPagePropsType) {


    let dialogsRenderArray = props.dialogsPage.dialogsData.map(item => {
        return (

            <DialogItem key={item.id} id={item.id} name={item.name} src={item.src}/>

        )
    })
    let messagesRenderArray = props.dialogsPage.messagesData.map(item => {
        return (
            <Message key={item.id} message={item.message}/>
        )
    })


    const addMessage = () => {
        props.dispatch(addMessageAC(props.dialogsPage.newMessageText))
        // props.addMessageCallBack(props.dialogsPage.newMessageText)
    }

    const onchangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onChangeNewMessageTextAC(e.currentTarget.value))
        // props.changeNewMessageTextCallBack(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsRenderArray}
            </div>
            <div className={s.messages}>
                {messagesRenderArray}
            </div>
            <div className={s.textArea}>
                    <textarea value={props.dialogsPage.newMessageText}
                              onChange={onchangeNewMessageText}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>

        </div>)
}
import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogsPagePropsType,
} from "../../redux/store";
import {reduxForm, Field} from "redux-form";

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


    const addMessage = (value: any) => {
        props.addMessage(value.newMessagesBody)
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
                <AddMessageReduxForm onSubmit={addMessage}/>
            </div>

        </div>)
}


const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessagesBody'} placeholder={'Enter your message'}/>
            <button>Add message</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm);

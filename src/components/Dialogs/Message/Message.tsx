import s from "./Message.module.css";
import React from "react";

type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return <div className={s.message}>{props.message}</div>
}
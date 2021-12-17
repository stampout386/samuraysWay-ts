import css from "./Post.module.css";
import React from "react";

export type PostPropsType = {
    id: number
    message: string
    like: number
}


export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={css.item}>
            <div><img src="https://econet.ru/uploads/pictures/456175/content_photo_1.jpg" alt=""/>{props.message}</div>
            <div>like {props.like}</div>
        </div>
    )
}
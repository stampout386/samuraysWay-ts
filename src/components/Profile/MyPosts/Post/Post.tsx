import css from "./Post.module.css";
import React from "react";

export function Post() {
    return (
        <div className={css.item}>
            <div><img src="https://econet.ru/uploads/pictures/456175/content_photo_1.jpg" alt=""/>Post</div>
            <div>like</div>
        </div>
    )
}
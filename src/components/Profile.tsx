import React from "react";
import css from './Profile.module.css'

export function Profile() {
    return (
        <div className={css.content}>
            <div>
                <img
                    src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                    alt=""/>
            </div>
            <div>ava+description</div>
            <div>
                My posts
                <div>New post</div>
                <div>
                    <div className={css.item}>post 1</div>
                    <div className={css.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import css from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export function Profile() {

    return (
        <div className={css.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
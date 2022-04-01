import React from "react";
import css from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export function Profile(props: any) {
    console.log(props)
    return (
        <div className={css.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
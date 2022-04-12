import React from "react";
import css from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {updateStatusTC} from "../../redux/profileReducer";


export function Profile(props: any) {
    return (
        <div className={css.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    )
}
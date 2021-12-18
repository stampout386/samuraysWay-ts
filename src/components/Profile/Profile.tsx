import React from "react";
import css from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../redux/state";


export function Profile(props: ProfilePagePropsType) {

    return (
        <div className={css.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}/>
        </div>
    )
}
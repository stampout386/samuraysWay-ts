import React from "react";
import css from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../redux/store";


export function Profile(props: ProfilePagePropsType) {

    return (
        <div className={css.content}>
            <ProfileInfo/>
            <MyPosts newPostText={props.profilePage.newPostText} postData={props.profilePage.postData}
                     dispatch ={props.dispatch}/>
        </div>
    )
}
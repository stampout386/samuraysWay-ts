import React from "react";
import css from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";



export function Profile(props:ProfilePageType) {


    return (
        <div className={css.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}
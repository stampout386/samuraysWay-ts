import React from "react";
import css from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataPropsType} from "../../index";


export function Profile(props:PostDataPropsType) {


    return (
        <div className={css.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}
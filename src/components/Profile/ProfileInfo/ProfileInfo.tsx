import React from "react";
import {Preloader} from "../../../commons/Preloader/Preloader";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/store";

export function ProfileInfo(props: ProfileType) {

    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>

                {
                    !props.profile ? <Preloader/> :
                        <div><img src={props.profile.photos.large}/>
                            <div>about me : {props.profile.aboutMe}</div>
                            <div>contacts : {props.profile.contacts.github}</div>
                            <div>fullName : {props.profile.fullName}</div>

                        </div>

                }


            </div>
        </div>

    )
}


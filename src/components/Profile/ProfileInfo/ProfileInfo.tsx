import React from "react";
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}


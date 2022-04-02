import s from "./users.module.css";
import userPhoto
    from "../../assets/images/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png";
import React from "react";
import {UsersType} from "../../redux/usersReduser";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersComponentType = {
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    onChangePage: (numberPage: number) => void
    users: Array<UsersType>
}

export const Users = (props: UsersComponentType) => {
    let usersCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = []
    for (let i = 1; i <= usersCount; i++) {
        pages.push(i)
    }

    const unfollowRequest = (id: number) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": 'c5b08a5b-ebd6-4d48-90f0-0ef1c70dffc1'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unfollow(id)
                }
            })
    }
    const followRequest = (id: number) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": 'c5b08a5b-ebd6-4d48-90f0-0ef1c70dffc1'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(id)
                }
            })

    }

    return (
        <div>
            <div className={s.pages}>
                {pages.map(item => {
                    if (item >= props.currentPage - 4 && item <= props.currentPage + 4) {
                        return (
                            <a key={item} onClick={() => {
                                props.onChangePage(item)
                            }}
                               className={props.currentPage === item ? s.selectedPage : ''}>{item} </a>
                        )
                    } else return undefined

                })}
            </div>
            {props.users.map((item) => <div key={item.id} className={s.users}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + item.id}> <img
                           src={item.photos.small != null ? item.photos.small : userPhoto}
                           className={s.ava}/></NavLink>
                     </div>
                    <div>
                        {item.followed ?
                            <button onClick={() => {
                                unfollowRequest(item.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                followRequest(item.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{item.name}</div>
                        <div>{item.status}</div>
                    </span>
                    <span>
                        <div>{'item.location.city'}</div>
                        <div>{'item.location.country'}</div>
                    </span>
                </span>
            </div>)}
        </div>

    )
}
import s from './users.module.css'
import {UsersPropsType} from "../../redux/store";
import axios from "axios";
import userPhoto
    from '../../assets/images/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png'
import React from "react";


export class UsersClass extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount)
            })
    }

    render() {

        let usersCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = []
        for (let i = 1; i <= usersCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(item => <span key={item} onClick={() => this.props.setCurrentPage(item)}
                                             className={this.props.currentPage === item ? s.selectedPage : ''}>-{item}-</span>)}
                </div>
                {this.props.users.map(item => <div key={item.id}>
                <span>
                    <div>
                        <img src={item.photos.small != null ? item.photos.small : userPhoto} className={s.ava}/>
                     </div>
                    <div>
                        {item.followed ? <button onClick={() => {
                            this.props.unfollow(item.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            this.props.follow(item.id)
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
}
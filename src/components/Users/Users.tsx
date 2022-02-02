import s from './users.module.css'
import {UsersPropsType} from "../../redux/store";


export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.blast.hk/attachments/68493/',
                followed: true,
                fullName: 'Mik',
                status: 'I am boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-22.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am groot',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://www.blast.hk/attachments/68493/',
                followed: true,
                fullName: 'Jonn',
                status: 'I am good',
                location: {city: 'New-York', country: 'USA'}
            },
            {
                id: 4,
                photoUrl: 'https://www.blast.hk/attachments/68493/',
                followed: false,
                fullName: 'Artem',
                status: 'I am pet',
                location: {city: 'Warshaw', country: 'Poland'}
            },

        ])
    }


    return (
        <div>
            {props.users.map(item => <div key={item.id}>
                <span>
                    <div>
                        <img src={item.photoUrl} className={s.ava}/>
                    </div>
                    <div>
                        {item.followed ? <button onClick={() => {
                            props.unfollow(item.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(item.id)
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{item.fullName}</div>
                        <div>{item.status}</div>
                    </span>
                    <span>
                        <div>{item.location.city}</div>
                        <div>{item.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}
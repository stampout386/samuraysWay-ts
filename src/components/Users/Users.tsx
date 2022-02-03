import s from './users.module.css'
import {UsersPropsType} from "../../redux/store";
import axios from "axios";
import userPhoto
    from '../../assets/images/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png'


// export const Users = (props: UsersPropsType) => {
//     const getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     props.setUsers(response.data.items, response.data.totalCount)
//                 })
//
//         }
//     }
//
//
//     return (
//         <div>
//             <button onClick={getUsers}>GetUsers</button>
//             {props.users.map(item => <div key={item.id}>
//                 <span>
//                     <div>
//                         <img src={item.photos.small != null ? item.photos.small : userPhoto} className={s.ava}/>
//                     </div>
//                     <div>
//                         {item.followed ? <button onClick={() => {
//                             props.unfollow(item.id)
//                         }}>Unfollow</button> : <button onClick={() => {
//                             props.follow(item.id)
//                         }}>Follow</button>}
//                     </div>
//                 </span>
//                 <span>
//                     <span>
//                         <div>{item.name}</div>
//                         <div>{item.status}</div>
//                     </span>
//                     <span>
//                         <div>{'item.location.city'}</div>
//                         <div>{'item.location.country'}</div>
//                     </span>
//                 </span>
//             </div>)}
//         </div>
//     )
// }
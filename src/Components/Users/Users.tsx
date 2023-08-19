import React from "react";
import s from './users.module.css'
import {UsersPageType} from "../../Redux/users-reducer";
import axios from "axios";
import userPhoto from '../../assets/images/1.jpg'


type UserType = {
    users: Array<UsersPageType>
    follow: (id: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersPageType>) => void
}


export const Users: React.FC<UserType> = (props) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })

    }

    let usersElements = props.users.map(el => <div key={el.id} className={s.wrapper}>
        <div className={s.logo}>
            <div className={s.picture}>
                <img className={s.image} src={el.photos.small != null ? el.photos.small : userPhoto} alt="image logo"/>
            </div>
            <div>
                {el.followed ? (
                    <button onClick={() => props.unFollow(el.id)}>Unfollow</button>
                ) : (
                    <button onClick={() => props.follow(el.id)}>Follow</button>
                )}
            </div>
        </div>
        <div className={s.body}>
            <div>
                <div>{el.name}</div>
                <div>{el.status}</div>
            </div>
            <div>
                <div>{'el.location.country'}</div>
                <div>{'el.location.city'}</div>
            </div>
        </div>
    </div>)


    return (
        <div>
            {usersElements}
        </div>
    );
}
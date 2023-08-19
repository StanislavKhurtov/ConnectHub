import React from "react";
import s from './users.module.css'
import {UsersPageType} from "../../Redux/users-reducer";
import {v1} from "uuid";

type UserType = {
    users: Array<UsersPageType>
    follow: (id: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersPageType>) => void
}


export const Users: React.FC<UserType> = (props) => {
    if (props.users.length === 0) {

        props.setUsers([
            {
                id: v1(),
                photoUrl: 'http://cdn1.flamp.ru/a992cfb02dd71b2dc22b2f577067ddd8.jpg',
                followed: true,
                fullName: "Stanislav",
                status: 'I am a developer',
                location: {city: 'Gomel', country: 'Belarus'}
            },
            {
                id: v1(),
                photoUrl: 'http://cdn1.flamp.ru/a992cfb02dd71b2dc22b2f577067ddd8.jpg',
                followed: false,
                fullName: "Sofia",
                status: 'I am a developer-2',
                location: {city: 'Penza', country: 'Russia'}
            },
            {
                id: v1(),
                photoUrl: 'http://cdn1.flamp.ru/a992cfb02dd71b2dc22b2f577067ddd8.jpg',
                followed: true,
                fullName: "Egor",
                status: 'I am a developer-3',
                location: {city: 'Beijing', country: 'China'}
            },
            {
                id: v1(),
                photoUrl: 'http://cdn1.flamp.ru/a992cfb02dd71b2dc22b2f577067ddd8.jpg',
                followed: false,
                fullName: "Natalia",
                status: 'I am a developer-4',
                location: {city: 'New-Delhi', country: 'India'}
            },
        ])
    }

    let usersElements = props.users.map(el => <div key={el.id} className={s.wrapper}>
        <div className={s.logo}>
            <div className={s.picture}>
                <img className={s.image} src={el.photoUrl} alt="image logo"/>
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
                <div>{el.fullName}</div>
                <div>{el.status}</div>
            </div>
            <div>
                <div>{el.location.country}</div>
                <div>{el.location.city}</div>
            </div>
        </div>
    </div>)



    return (
        <div>
            {usersElements}
        </div>
    );
}
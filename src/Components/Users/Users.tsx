import React from "react";
import s from "./users.module.css";
import {followUser, unfollowUser, UsersPageType} from "../../Redux/users-reducer";
import userPhoto from '../../assets/images/1.jpg'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootState} from "../../Redux/redux-store";
import {AnyAction} from "redux";


type UsersTypeProps = {
    users: Array<UsersPageType>
    follow: (id: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersPageType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: any
    followingInProgress: number[]

};

export const Users = (props: UsersTypeProps) => {
    const {
        users,
        currentPage,
        pageSize,
        totalCount,


    } = props;

    const dispatch = useDispatch<ThunkDispatch<AppRootState, any, AnyAction>>()

    const pageCount = Math.ceil(totalCount / pageSize);
    const visiblePages = 10; // Количество видимых страниц

    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(pageCount, startPage + visiblePages - 1);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div>
            {users.map((el) => (
                <div key={el.id} className={s.wrapper}>
                    <div className={s.logo}>
                        <div className={s.picture}>
                            <NavLink to={`/profile/${el.id}`}>
                                <img
                                    src={el.photos.small !== null ? el.photos.small : userPhoto}
                                    className={s.image}
                                    alt="image logo"
                                />
                            </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ? (
                                <button
                                    disabled={props.followingInProgress.some(id => id === el.id)}
                                    onClick={() => {dispatch(unfollowUser(el.id))}
                                }>Unfollow
                                </button>
                            )
                                : (
                                <button
                                    disabled={props.followingInProgress.some(id => id === el.id)}
                                    onClick={() => {dispatch(followUser(el.id))}}
                                >Follow</button>
                            )}
                        </div>
                    </div>
                    <div className={s.body}>
                        <div>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </div>
                        <div>
                            <div>{"Belarus"}</div>
                            <div>{"Minsk"}</div>
                        </div>
                    </div>
                </div>
            ))}
            <div className={s.pagination}>
                {pages.map((p) => (
                    <span
                        key={p}
                        className={currentPage === p ? s.selectedPage : ""}
                        onClick={() => props.onPageChanged(p)}
                    >
            {p}
          </span>
                ))}
            </div>
        </div>
    );
};
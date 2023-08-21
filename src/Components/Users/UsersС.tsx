import React, { Component } from "react";
import axios from "axios";
import s from './users.module.css'
import userPhoto from '../../assets/images/1.jpg'
import {UsersPageType} from "../../Redux/users-reducer";

type UserType = {
    users: Array<UsersPageType>
    follow: (id: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersPageType>) => void
    setCurrent: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
}

type UsersState = {
    error: string | null;
}

export class UsersC extends Component<UserType, UsersState> {
    constructor(props: UserType) {
        super(props);

        this.state = {
            error: null,
        };
    }

    componentDidMount() {
        this.requestUsers(this.props.currentPage);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrent(pageNumber);
        this.requestUsers(pageNumber);
    }

    requestUsers = (page: number) => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
            .catch((error) => {
                this.setState({error: "Error fetching users"});
            });
    }

    render() {
        const {users} = this.props;
        const {error} = this.state;

        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {error ? (
                    <div>{error}</div>
                ) : (
                    users.map((el) => (
                        <div key={el.id} className={s.wrapper}>
                            <div className={s.logo}>
                                <div className={s.picture}>
                                    <img
                                        className={s.image}
                                        src={el.photos.small != null ? el.photos.small : userPhoto}
                                        alt="image logo"
                                    />
                                </div>
                                <div>
                                    {el.followed ? (
                                        <button onClick={() => this.props.unFollow(el.id)}>
                                            Unfollow
                                        </button>
                                    ) : (
                                        <button onClick={() => this.props.follow(el.id)}>
                                            Follow
                                        </button>
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
                        </div>
                    ))
                )}
                <div className={s.pagination}>
                    {
                        pages.map(p => (
                            <span
                                key={p}
                                className={this.props.currentPage === p ? s.selectedPage : ''}
                                onClick={() => {
                                    this.onPageChanged(p)
                                }} // Исправленная строка
                            >
                            {p}
                        </span>
                        ))
                    }
                </div>
            </div>
        )
    }
}



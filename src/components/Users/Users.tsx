import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: Array<UsersType>
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((el, index) => {
                    return <span key={index}
                                 className={props.currentPage === el ? style.selectedPage : ''}
                                 onClick={() => props.onPageChanged(el)}>{el}</span>
                })}
            </div>
            <div>
                {props.users.map(el => <div className={style.main} key={el.id}>
                    <div className={style.ava_btn}>
                        <NavLink to={`/profile/${el.id}`}>
                            <img className={style.photo} src={el.photos.small != null ? el.photos.small : userPhoto}/>
                        </NavLink>
                        <div> {el.followed
                            ? <button className={style.btn} onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'e3f64c95-5af6-4e5f-a0a6-dfda897924eb'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(el.id)
                                    }
                                })
                            }
                            }>Unfollow</button>
                            : <button className={style.unbtn} onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'e3f64c95-5af6-4e5f-a0a6-dfda897924eb'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(el.id)
                                    }
                                })
                            }}>Follow</button>
                        }</div>
                    </div>
                    <div className={style.second}>
                        <div className={style.name_status}>
                            <div className={style.name}>{el.name}</div>
                            <div className={style.status}>{el.status}</div>
                        </div>
                        <div className={style.location}>
                            <div className={style.country}>{'location.country'}</div>
                            <div className={style.city}>{'location.city'}</div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
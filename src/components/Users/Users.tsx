import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";

type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: Array<UsersType>
    followingInProgress: Array<number>
    setFollowingInProgress: (inProgress: boolean, id: number) => void
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
                            ? <button disabled={props.followingInProgress.some(id => id ===el.id)} className={style.btn} onClick={() => {
                                props.setFollowingInProgress(true, el.id)
                                usersApi.unfollow(el.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(el.id)
                                        }
                                        props.setFollowingInProgress(false, el.id)
                                    })
                            }
                            }>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id ===el.id)} className={style.unbtn} onClick={() => {
                                props.setFollowingInProgress(true, el.id)
                                usersApi.follow(el.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(el.id)
                                        }
                                        props.setFollowingInProgress(false, el.id)
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
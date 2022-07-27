import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/images.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
    user: UsersType
}

export const User: React.FC<UserPropsType> = ({unfollow, follow, followingInProgress, user}) => {

    return (
        <div className={style.main} key={user.id}>
            <div className={style.ava_btn}>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={style.photo} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                </NavLink>
                <div> {user.followed
                    ?
                    <button disabled={followingInProgress.some(id => id === user.id)} className={style.btn}
                            onClick={() => {
                                follow(user.id)
                            }
                            }>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              className={style.unbtn}
                              onClick={() => {
                                  unfollow(user.id)
                              }
                              }>Follow</button>
                }</div>
            </div>
            <div className={style.second}>
                <div className={style.name_status}>
                    <div className={style.name}>{user.name}</div>
                    <div className={style.status}>{user.status}</div>
                </div>
                <div className={style.location}>
                    <div className={style.country}>{'location.country'}</div>
                    <div className={style.city}>{'location.city'}</div>
                </div>
            </div>
        </div>
    )
}
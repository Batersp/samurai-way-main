import React from "react";
import {DispatchToPropsType, StateToPropsType} from "./UsersContainer";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/images.png'


export const Users = (props: StateToPropsType & DispatchToPropsType) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            <div>
                {props.users.map(el => <div className={style.main} key={el.id}>
                    <div className={style.ava_btn}>
                        <img className={style.photo} src={el.photos.small != null ? el.photos.small : userPhoto}/>
                        <div> {el.followed
                            ? <button className={style.btn} onClick={() => {
                                props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button className={style.unbtn} onClick={() => {
                                props.follow(el.id)
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


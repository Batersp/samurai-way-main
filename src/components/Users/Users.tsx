import React from "react";
import {DispatchToPropsType, StateToPropsType} from "./UsersContainer";
import style from './Users.module.css'


export const Users = (props: StateToPropsType & DispatchToPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: 'Dua Lipa',
                status: 'come to my concert in Paris',
                location: {city: 'London', country: 'United Kingdom'},
                followed: true,
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqulWLZOj-2ZCLxuK8nnv-lq3FqBP8y9IW1A&usqp=CAU'
            },
            {
                id: 2,
                fullName: 'Charles Oliveira',
                status: 'I\'m the UFC champion, I write history',
                location: {city: 'Sao paulo', country: 'Brazil'},
                followed: false,
                photo: 'data:image/jpeg;base64,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'
            },
            {
                id: 3,
                fullName: 'Johnny Depp',
                status: 'dont trust pirates',
                location: {city: 'Kentucky', country: 'USA'},
                followed: true,
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq97Ny-y0USViGO21biXP0TovPz9VKAUvHEQ&usqp=CAU'
            }
        ])
    }
    return (
        <div>
            {props.users.map(el => <div key={el.id}>
                <div>
                    <img className={style.photo} src={el.photo}/>
                    <span>{el.fullName}</span>
                    <span>{el.location.country}</span>
                </div>
                <div>{el.followed
                    ? <button onClick={() => {
                        props.unfollow(el.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(el.id)
                    }}>Follow</button>
                }
                    <span>{el.status}</span>
                    <span>{el.location.city}</span>

                </div>
            </div>)}
        </div>
    )
}
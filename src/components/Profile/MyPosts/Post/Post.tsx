import React from 'react';
import s from './Post.module.css'

type PropsType = {
    photo: string
    message: string
    id: number | undefined
    likeCounts: number
    name: string
}

export const Post: React.FC<PropsType> = ({photo, id, message, likeCounts, name}) => {
    return (

        <div key={id} className={s.container}>
            <div className={s.imgContainer}>
                <img src={photo}/>
                <span className={s.name}>{name}</span>
            </div>
            <div className={s.text}>
                {message}
            </div>
            <div className={s.likes}>
                <span className={s.like}>LIKE</span>
                <span className={s.likeCounts}> {likeCounts}</span>
            </div>
        </div>

    );
};

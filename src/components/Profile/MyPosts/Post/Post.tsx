import React from 'react';
import s from './Post.module.css'
import {PostType} from "../MyPosts";

export const Post:React.FC<PostType> = (props) => {
    return (

        <div className={s.item}>
            <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'/>
            {props.message}
            <div>
                <span>LIKE</span>
                <span> {props.likeCounts}</span>
            </div>
        </div>

    );
};

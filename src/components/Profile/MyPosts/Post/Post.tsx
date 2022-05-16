import React from 'react';
import s from './Post.module.css'
import {PostsType} from "../../../../redux/profile-reducer";



export const Post: React.FC<PostsType> = (props) => {
    return (

        <div key={props.id} className={s.item}>
            <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'/>
            {props.message}
            <div>
                <span>LIKE</span>
                <span> {props.likeCounts}</span>
            </div>
        </div>

    );
};

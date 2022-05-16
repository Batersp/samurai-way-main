import React from 'react';
import s from './Friends.module.css'
import {FriendsType} from "../../../redux/sidebar-reducer";



export const Friends = (props: FriendsType) => {

    return (
        <div className={s.friends}>
            <img src={props.url}/>
            <div>
            {props.name}
            </div>
        </div>
    );
};


import React from 'react';
import s from './Friends.module.css'

type FriendsPropsType = {
    name: string
    url: string
}


export const Friends = (props: FriendsPropsType) => {

    return (
        <div className={s.friends}>
            <img src={props.url}/>
            <div>
            {props.name}
            </div>
        </div>
    );
};


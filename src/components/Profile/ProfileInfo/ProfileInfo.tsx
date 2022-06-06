import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    photos: string
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if(!props.photos) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.photo}
                    src='https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/MOTM.jpg?itok=JOg4NtNr'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.photos} alt="photo profile"/>
                ava+discription
            </div>
        </div>
    );
};


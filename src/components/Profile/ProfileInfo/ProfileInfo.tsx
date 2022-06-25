import React from 'react';
import s from './ProfileInfo.module.css'
import profilePhoto from '../../../assets/images/profile.png'
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoPropsType = {
    photos: string
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if(!props.photos) {
        return (
            <>
                <div>
                    <img src={profilePhoto} alt={'profile'}/>
                </div>

                <div>
                    <ProfileStatus status={'HELLOOO GUUYYSSS'}/>
                </div>

            </>
        )
    }

    return (
        <div>
           {/* <div>
                <img className={s.photo}
                    src='https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/MOTM.jpg?itok=JOg4NtNr'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.photos} alt="photo profile"/>
               <ProfileStatus status={'HELLOOO GUUYYSSS'}/>
            </div>
        </div>
    );
};


import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import profilePhoto from '../../../assets/images/profile.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    photos: string
    status: string
    fullName: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.descriptionBlock}>
            <img className={s.photo} src={props.photos || profilePhoto}  alt={'profile'}/>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            <div>{props.fullName}</div>

            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )

};


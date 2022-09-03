import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {FormValuesType, ProfileDataForm, UpdateProfileRequestType} from "./ProfileDataForm/ProfileDataForm";
import {Photo} from "./Photo/Photo";
import {ProfileData} from "./ProfileData/ProfileData";
import {InputDownload} from "./InputDownload/InputDownload";


type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
    saveProfile: (profile: UpdateProfileRequestType) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                                profile,
                                                                status,
                                                                isOwner,
                                                                updateStatus,
                                                                savePhoto,
                                                                saveProfile
                                                            }) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const onSubmit = (value: FormValuesType) => {
        saveProfile({...value, userId: profile.userId})
        setEditMode(false)
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    /* <input type="file" onChange={onMainPhotoSelected}/>*/
    return (
        <div className={s.descriptionBlock}>

            <Photo photos={profile.photos.large}/>
            {isOwner && <InputDownload callback={onMainPhotoSelected}/>}

            {editMode
                ? <ProfileDataForm onSubmit={onSubmit} profile={profile}/>
                : <ProfileData status={status} goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>}


            {/*  <img className={s.photo} src={profile.photos.large || profilePhoto}  alt={'profile'}/>
            {isOwner &&  <InputDownload callback={onMainPhotoSelected}/>}*/}


        </div>
    )

};







import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import profilePhoto from '../../../assets/images/profile.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileType} from "../../../redux/profile-reducer";
import {FormValuesType, ProfileDataForm, UpdateProfileRequestType} from "./ProfileDataForm/ProfileDataForm";


type ProfileInfoPropsType = {
   profile: ProfileType
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
    saveProfile: (profile: UpdateProfileRequestType) => void
}

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

type ContactPropsType = {
    contactTitle: string,
    contactValue: string
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, isOwner,updateStatus,savePhoto, saveProfile}) => {


    const [editMode, setEditMode] = useState<boolean>(false )
    const onSubmit = (value: FormValuesType) => {
        saveProfile({...value, userId: profile.userId})
        setEditMode(false)
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }



    return (
        <div className={s.descriptionBlock}>
            <img className={s.photo} src={profile.photos.large || profilePhoto}  alt={'profile'}/>
            {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

            {editMode? <ProfileDataForm onSubmit={onSubmit} profile={profile}/>
                : <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>}


            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )

};

const Contact = (props: ContactPropsType) => {
    return (
        <div className={s.contact}>
            <b>{props.contactTitle}</b>: {props.contactValue}
        </div>
    )
}


const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner,goToEditMode}) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div> <b>Full name: </b> {profile.fullName}</div>

            <div>
                <b>Looking for a job</b> : {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob && <div>{profile.lookingForAJobDescription}</div>}
            <div>
                <b> About me </b>: {profile.aboutMe ? profile.aboutMe : 'nothing'}
            </div>

            <div>
                <b> Contacts </b>: {Object.keys(profile.contacts).map(key => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>

        </div>
    )
}



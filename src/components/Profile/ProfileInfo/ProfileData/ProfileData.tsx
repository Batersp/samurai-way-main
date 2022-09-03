import React from "react";
import {ProfileType} from "../../../../redux/profile-reducer";
import s from "./ProfileData.module.css";


type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

type ContactPropsType = {
    contactTitle: string,
    contactValue: string
}

export const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.container}>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div><b>Full name: </b> {profile.fullName}</div>

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


const Contact = (props: ContactPropsType) => {
    return (
        <div className={s.contact}>
            <b>{props.contactTitle}</b>: {props.contactValue}
        </div>
    )
}

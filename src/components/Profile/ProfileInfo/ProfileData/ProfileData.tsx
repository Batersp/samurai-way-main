import React from "react";
import {ProfileType, updateStatus} from "../../../../redux/profile-reducer";
import s from "./ProfileData.module.css";
import {Paper} from "@mui/material";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks";


type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
    status: string
}

type ContactPropsType = {
    contactTitle: string,
    contactValue: string
}

export const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode, status}) => {
    return (
        <div className={s.container}>
            {isOwner && <div className={s.aboutMe}>
                 <div className={s.aboutMeText}>Info</div>  <ModeEditOutlineIcon className={s.icon} onClick={goToEditMode} />
            </div>}
            <Paper elevation={10}  className={s.info}>
            <div className={s.item}>
                <b>Name: </b> {profile.fullName}
            </div>

                <div className={s.item}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>

            <div className={s.item}>
                <b>Looking for a job</b> : {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
                <div className={s.item}>
                    <b>Skills</b> :{profile.lookingForAJob && <span>{profile.lookingForAJobDescription}</span>}
                </div>
            <div className={s.item}>
                <b> About me </b>: {profile.aboutMe ? profile.aboutMe : 'nothing'}
            </div>

            <div className={s.item}>
                <b> Contacts </b>: {Object.keys(profile.contacts).map(key => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>

            </Paper>

        </div>
    )
}


const Contact = (props: ContactPropsType) => {
    return (
        <div className={s.contacts}>
            <div className={s.contact}>
                <b>{props.contactTitle}</b>: {props.contactValue}
            </div>

        </div>
    )
}

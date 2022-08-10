import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {UpdateProfileRequestType} from "./ProfileInfo/ProfileDataForm/ProfileDataForm";

type ProfilePropsType = {
   profile: ProfileType
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
    saveProfile: (profile: UpdateProfileRequestType) => void
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}


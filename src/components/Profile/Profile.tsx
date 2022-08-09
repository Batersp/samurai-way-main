import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./../../redux/profile-reducer";
import {FormValuesType} from "./ProfileInfo/ProfileDataForm/ProfileDataForm";
import {UpdateProfileType} from "../../api/api";


type ProfilePropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
    saveProfile: (data: UpdateProfileType) => void
}

export const Profile = (props: ProfilePropsType ) => {


    return (
        <div>
            <ProfileInfo
                saveProfile={props.saveProfile}
                profile={props.profile}
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}


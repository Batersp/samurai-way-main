import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    photos: string
    status: string
    fullName: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} fullName={props.fullName} photos={props.photos} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}


import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    photos: string
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo photos={props.photos} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
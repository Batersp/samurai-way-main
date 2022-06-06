import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    photos: string
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo photos={props.photos}/>
            <MyPostsContainer/>
        </div>
    )
}
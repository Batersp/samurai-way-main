import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void
}


export const Profile: React.FC<ProfileType> = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
            />
        </div>
    )
}
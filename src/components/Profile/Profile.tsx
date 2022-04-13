import React from "react";
import s from './Profile.module.css'
import {MyPosts, PostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfileType = {
    posts: Array<PostType>
}

export const Profile: React.FC<ProfileType> = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
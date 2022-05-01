import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    updatePostText: (text: string) => void
}


export const Profile: React.FC<ProfileType> = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                textForNewPost={props.profilePage.textForNewPost}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
            />
        </div>
    )
}
import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchActionType, ProfilePageType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



export const Profile = () => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
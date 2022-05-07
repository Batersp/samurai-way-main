import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchActionType, ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: DispatchActionType) => void

}


export const Profile: React.FC<ProfileType> = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                textForNewPost={props.profilePage.textForNewPost}
                dispatch={props.dispatch}
            />
        </div>
    )
}
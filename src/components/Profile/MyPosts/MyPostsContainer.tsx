import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPostAC, ProfilePageType, updatePostTextAC} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

export type StateToPropsType = {
    profilePage: ProfilePageType
}

export type DispatchToPropsType = {
    updatePostText: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state:StateToPropsType): StateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
    return {
        updatePostText: (text: string) => {
            dispatch(updatePostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}


export const MyPostsContainer = connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)
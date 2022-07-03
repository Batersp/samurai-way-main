import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {addPostAC, ProfilePageType} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

export type StateToPropsType = {
    profilePage: ProfilePageType
}

export type DispatchToPropsType = {
    addPost: (message: string) => void
}

const mapStateToProps = (state: AppStateType): StateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
    return {
        addPost: (message: string) => {
            dispatch(addPostAC(message))
        }
    }
}


export const MyPostsContainer = connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)
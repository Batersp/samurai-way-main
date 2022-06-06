import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";


class ProfileContainerApi extends React.Component<StateToPropsType & DispatchToPropsType, AppStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            debugger
            this.props.setUserProfile(response.data.photos.large)
        })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }

}

type DispatchToPropsType = {
    setUserProfile: (photos: string) => void
}

type StateToPropsType = {
    photos: string
}

const mapStateToProps = (state: AppStateType): StateToPropsType => {
    return {
photos: state.profilePage.profilePhotos
    }
}

export const ProfileContainer = connect<StateToPropsType, DispatchToPropsType, {}, AppStateType> (mapStateToProps,{setUserProfile})(ProfileContainerApi)
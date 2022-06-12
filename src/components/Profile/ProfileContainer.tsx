import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ParamsType = {
    userId: string
}

class ProfileContainerApi extends React.Component<StateToPropsType & DispatchToPropsType & RouteComponentProps<ParamsType>, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
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

let WithUrlDataContainerComponent = withRouter(ProfileContainerApi)

export const ProfileContainer = connect<StateToPropsType, DispatchToPropsType, {}, AppStateType> (mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent)
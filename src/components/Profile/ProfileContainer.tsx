import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type ParamsType = {
    userId: string
}

class ProfileContainerApi extends React.Component<StateToPropsType & DispatchToPropsType & RouteComponentProps<ParamsType>, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }

}

type DispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type StateToPropsType = {
    photos: string
    status: string
}

const mapStateToProps = (state: AppStateType): StateToPropsType => {
    return {
        photos: state.profilePage.profilePhotos,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    /*WithAuthRedirect,*/
    connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)
(ProfileContainerApi)
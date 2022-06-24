import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type ParamsType = {
    userId: string
}

class ProfileContainerApi extends React.Component<StateToPropsType & DispatchToPropsType & RouteComponentProps<ParamsType>, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props}/>
        )
    }

}

type DispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type StateToPropsType = {
    photos: string
}

const mapStateToProps = (state: AppStateType): StateToPropsType => {
    return {
        photos: state.profilePage.profilePhotos,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerApi)

export const ProfileContainer = WithAuthRedirect(connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))
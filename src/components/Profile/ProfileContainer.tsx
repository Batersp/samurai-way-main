import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type ParamsType = {
    userId: string
}

class ProfileContainerApi extends React.Component<StateToPropsType & DispatchToPropsType & RouteComponentProps<ParamsType>, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>

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
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): StateToPropsType => {
    return {
        photos: state.profilePage.profilePhotos,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerApi)

export const ProfileContainer = connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
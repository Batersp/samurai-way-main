import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {
    getStatus,
    getUserProfile,
    ProfileType,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {FormValuesType} from "./ProfileInfo/ProfileDataForm/ProfileDataForm";
import {UpdateProfileType} from "../../api/api";

type ParamsType = {
    userId: string
}

class ProfileContainerApi extends React.Component<StateToPropsType & DispatchToPropsType & RouteComponentProps<ParamsType>, AppStateType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.id.toString()
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<StateToPropsType & DispatchToPropsType & RouteComponentProps<ParamsType>>, prevState: Readonly<AppStateType>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile
                profile={this.props.profile}
                isOwner={!this.props.match.params.userId}
                status={this.props.status}
                savePhoto={savePhoto}
                updateStatus={updateStatus}
                saveProfile={saveProfile}
                />
        )
    }

}

type DispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
    saveProfile: (data: UpdateProfileType) => void
}

type StateToPropsType = {
    profile: ProfileType
    status: string
    id: number
}

const mapStateToProps = (state: AppStateType): StateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.id
    }
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }),
    withRouter
)
(ProfileContainerApi)
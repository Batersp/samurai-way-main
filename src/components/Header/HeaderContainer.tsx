import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";


class HeaderContainerApi extends React.Component<any, any> {


    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}

export type DispatchToPropsType = {
    getAuthUserData: () => void
}

export type stateToPropsType = {
    login: string
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): stateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export const HeaderContainer = connect<stateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, {getAuthUserData})(HeaderContainerApi)

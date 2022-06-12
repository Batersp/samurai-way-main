import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import axios from "axios";


class HeaderContainerApi extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode ===0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, login, email)
            }
        })
    }


    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }

}

export type DispatchToPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
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


export const HeaderContainer = connect<stateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, {setAuthUserData})(HeaderContainerApi)
import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {DialogsPageType, sendMessageAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export type StateToPropsType = {
    dialogsPage: DialogsPageType
}

export type DispatchToPropsType = {
    sendMessage: (message: string) => void
}

const mapStateToProps = (state: AppStateType): StateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
    return {
        sendMessage: (message: string) => {
            dispatch(sendMessageAC(message))
        }
    }
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)
)
(Dialogs)
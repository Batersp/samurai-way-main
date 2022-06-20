import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type StateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

export type DispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    SendMessage: () => void
}

const mapStateToProps = (state: AppStateType): StateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        SendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)
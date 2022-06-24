import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export type StateToPropsType = {
    dialogsPage: DialogsPageType
}

export type DispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    SendMessage: () => void
}

const mapStateToProps = (state: AppStateType): StateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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

export const DialogsContainer = WithAuthRedirect(connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs))
import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

export type DispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    SendMessage: () => void
}

const mapStateToProps = (state: mapStateToPropsType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
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

export const DialogsContainer = connect<mapStateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)
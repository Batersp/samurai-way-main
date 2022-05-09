import {DialogsPageType, DispatchActionType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state: DialogsPageType, action: DispatchActionType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            state.messages.push({id: 4, message: state.newMessageBody})
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export const sendMessage = () => ({
    type: 'SEND-MESSAGE' as const
})

export default dialogsReducer


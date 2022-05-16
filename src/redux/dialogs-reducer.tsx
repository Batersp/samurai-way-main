
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogReducerActionType = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>

export type MessagesType = {
    id?: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Arteta'},
        {id: 2, name: 'Bentdner'},
        {id: 3, name: 'Rio Miyachi'}
    ],
    messages: [
        {id: 1, message: 'Who want play against Barselona?'},
        {id: 2, message: 'I can, but whats is Barselona?'},
        {id: 3, message: 'i got you coach, i dont'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action: DialogReducerActionType): DialogsPageType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.payload.body
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
        payload: {body}
    } as const
}

export const sendMessageAC = () => ({
    type: 'SEND-MESSAGE' as const
})

export default dialogsReducer


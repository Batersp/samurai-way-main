const SEND_MESSAGE = 'SEND-MESSAGE'

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
    ]
}

const dialogsReducer = (state = initialState, action: DialogReducerActionType): DialogsPageType => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {id: 4, message: action.payload.message}
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }
}

export type DialogReducerActionType = ReturnType<typeof sendMessageAC>



export const sendMessageAC = (message: string) => {
 return {
     type: 'SEND-MESSAGE',
     payload: {message}
 } as const

}

export default dialogsReducer


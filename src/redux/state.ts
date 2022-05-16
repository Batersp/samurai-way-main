import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import profileReducer, {addPostAC, updatePostTextAC} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


export type StoreType = {
    _state: RootStateType
    subscriber: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: DispatchActionType) => void
}

export type DispatchActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hey bro lets do it', likeCounts: 20},
                {id: 2, message: 'Great game', likeCounts: 34}
            ],
            textForNewPost: ''
        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [
                {
                    name: 'Barak',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCrV7FtTDbUF7H86lrvKzqoke_02pMmn7cg&usqp=CAU'
                },
                {
                    name: 'Ilon',
                    url: 'https://kubnews.ru/upload/resize_cache/webp/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.webp'
                },
                {
                    name: 'Conor',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpt1uIdn-TOiY_kHCuVGD1BvtJvUiv3YkRkQ&usqp=CAU'
                }
            ]
        }

    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscriber(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
        this._callSubscriber()
    }
}


export type FriendsType = {
    name: string
    url: string
}

export type MessagesType = {
    id?: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostsType = {
    id?: number
    message: string
    likeCounts: number
}

export type SideBarType = {
    friends: Array<FriendsType>
}

export type ProfilePageType = {
    posts: Array<PostsType>
    textForNewPost: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}




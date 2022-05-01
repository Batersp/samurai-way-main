import {rerenderEntireTree} from "../render";

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
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}


export let state: RootStateType = {
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
        ]
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

}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.textForNewPost,
        likeCounts: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.textForNewPost = ''
    rerenderEntireTree(state)

}


export const updatePostText = (text: string) => {
    state.profilePage.textForNewPost = text
    rerenderEntireTree(state)
}




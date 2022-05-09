import {DispatchActionType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: DispatchActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.textForNewPost,
                likeCounts: 0
            }
            state.posts.push(newPost)
            state.textForNewPost = ''
            return state
        case UPDATE_POST_TEXT:
            state.textForNewPost = action.text
            return state
        default:
            return state

    }
}

export const addPostAC = () => ({
    type: 'ADD-POST' as const
})

export const updatePostTextAC = (text: string) => {
    return {
        type: 'UPDATE-POST-TEXT',
        text: text
    } as const
}

export default profileReducer

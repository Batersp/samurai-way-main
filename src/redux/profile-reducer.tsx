

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

export type ProfileReducerActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostTextAC>

export type PostsType = {
    id?: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    textForNewPost: string
}

let initialState: ProfilePageType = {
        posts: [
            {id: 1, message: 'hey bro lets do it', likeCounts: 20},
            {id: 2, message: 'Great game', likeCounts: 34}
        ],
        textForNewPost: ''
    }


const profileReducer = (state = initialState, action: ProfileReducerActionType): ProfilePageType => {
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
            state.textForNewPost = action.payload.text
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
        payload: {text}
    } as const
}

export default profileReducer

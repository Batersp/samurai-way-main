import {Dispatch} from "redux";
import {profileApi, usersApi} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type ProfileReducerActionType = SetUserProfileType | AddPostACTypeType | UpdatePostTextACType | setStatusACType
type SetUserProfileType = ReturnType<typeof setUserProfile>
type AddPostACTypeType = ReturnType<typeof addPostAC>
type UpdatePostTextACType = ReturnType<typeof updatePostTextAC>
type setStatusACType = ReturnType<typeof setStatus>

export type PostsType = {
    id?: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    textForNewPost: string
    profilePhotos: string
    status: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'hey bro lets do it', likeCounts: 20},
        {id: 2, message: 'Great game', likeCounts: 34}
    ],
    textForNewPost: '',
    profilePhotos: '',
    status: ''
}


const profileReducer = (state = initialState, action: ProfileReducerActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.textForNewPost,
                likeCounts: 0
            }
            return {...state, posts: [...state.posts, newPost], textForNewPost: ''}
        }
        case UPDATE_POST_TEXT: {
            return {...state, textForNewPost: action.payload.text}
        }
        case SET_USER_PROFILE: {
            return {...state, profilePhotos: action.payload.photos}
        }
        case SET_STATUS: {
            return {...state, status: action.payload.status}
        }
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

export const setUserProfile = (photos: string) => {
    return {
        type: SET_USER_PROFILE,
        payload: {photos}
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {status}
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileApi.getProfile(userId)
            .then(response => {

                dispatch(setUserProfile(response.data.photos.large))
            })
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }

            })
    }
}

export default profileReducer

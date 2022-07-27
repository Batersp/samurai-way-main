import {Dispatch} from "redux";
import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

export type ProfileReducerActionType = SetUserProfileType | AddPostACTypeType | setStatusACType | DeletePostACType
type SetUserProfileType = ReturnType<typeof setUserProfile>
type AddPostACTypeType = ReturnType<typeof addPostAC>
type setStatusACType = ReturnType<typeof setStatus>
type DeletePostACType = ReturnType<typeof deletePostAC>

export type PostsType = {
    id?: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    status: string
    profile: {
        aboutMe: string
        contacts: {facebook: string, website: string, vk: string, twitter: string, instagram: string}
        fullName: string
        lookingForAJob: boolean
        lookingForAJobDescription: boolean
        photos: {small: string, large: string}
        userId: number
    }
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'hey bro lets do it', likeCounts: 20},
        {id: 2, message: 'Great game', likeCounts: 34}
    ],
    profile: {
        aboutMe: '',
        contacts: {facebook: '', website: '', vk: '', twitter: '', instagram: ''},
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: false,
        photos: {small: '', large: ''},
        userId: 0
    },
    status: ''
}


export const profileReducer = (state = initialState, action: ProfileReducerActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.payload.message,
                likeCounts: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }

        case SET_USER_PROFILE: {
            return {...state, profile:{...state.profile, fullName: action.payload.fullName, photos: {...state.profile.photos, small: action.payload.photos}} }
        }
        case SET_STATUS: {
            return {...state, status: action.payload.status}
        }
        case DELETE_POST: {
            return {...state, posts:[...state.posts.filter(el => el.id !== action.payload.id)]}
        }
        default:
            return state

    }
}

export const addPostAC = (message: string) => {
    return {
        type: 'ADD-POST',
        payload: {message}
    } as const
}

export const setUserProfile = (photos: string, fullName: string) => {
    return {
        type: SET_USER_PROFILE,
        payload: {photos, fullName}
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {status}
    } as const
}

export const deletePostAC = (id: number) => {
    return {
        type: DELETE_POST,
        payload: {id}
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileApi.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data.photos.large, response.data.fullName))
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



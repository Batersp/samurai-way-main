import {Dispatch} from "redux";
import {profileApi, UpdateProfileType} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

export type ProfileReducerActionType =
    SetUserProfileType
    | AddPostACTypeType
    | setStatusACType
    | DeletePostACType
    | SavePhotoSuccessType
type SetUserProfileType = ReturnType<typeof setUserProfile>
type AddPostACTypeType = ReturnType<typeof addPostAC>
type setStatusACType = ReturnType<typeof setStatus>
type DeletePostACType = ReturnType<typeof deletePostAC>
type SavePhotoSuccessType = ReturnType<typeof savePhotoSuccess>

export type PostsType = {
    id?: number
    message: string
    likeCounts: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string, website: string, vk: string, twitter: string, instagram: string, youtube: string,
        github: string,
        mainLink: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { small: string, large: string }
    userId: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    status: string
    profile: ProfileType
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'hey bro lets do it', likeCounts: 20},
        {id: 2, message: 'Great game', likeCounts: 34}
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '', website: '', vk: '', twitter: '', instagram: '', youtube: '',
            github: '',
            mainLink: ''
        },
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
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
            return {...state, profile: action.payload.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.payload.status}
        }
        case DELETE_POST: {
            return {...state, posts: [...state.posts.filter(el => el.id !== action.payload.id)]}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.payload.photos}}
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

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {profile}
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

export const savePhotoSuccess = (photos: { small: string, large: string }) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        payload: {photos}
    } as const
}

export const getUserProfile = (userId: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileApi.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (userId: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileApi.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileApi.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhoto = (file: any) => {
    return async (dispatch: Dispatch) => {
        let response = await profileApi.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}

export const saveProfile = (data: UpdateProfileType) => {
    return async (dispatch: any) => {
        debugger
        let response = await profileApi.saveProfile(data)
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(data.userId.toString()))
        }
    }
}

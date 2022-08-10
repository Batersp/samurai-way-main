import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppActionsType, AppStateType} from "./redux-store";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const SET_MESSAGE_ERROR = 'auth/SET_MESSAGE_ERROR'
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS'

export type InitialStateType = {
    id: number
    login: string
    email: string
    isAuth: boolean
    messageError: string
    captcha: null | string
}

let initialState: InitialStateType = {
    id: 0,
    login: '',
    email: '',
    isAuth: false,
    messageError: '',
    captcha: null
}


export const authReducer = (state = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {...state, ...action.payload}
        }

        case SET_MESSAGE_ERROR: {
            return {...state, messageError: action.payload.message}
        }

        case GET_CAPTCHA_SUCCESS: {
            return {...state, captcha: action.payload.captchaUrl }
        }
        default:
            return state
    }
}

export type AuthReducerActionType = SetAuthUserDataType | SetMessageErrorType | GetCaptchaSuccessType
type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
type SetMessageErrorType = ReturnType<typeof setMessageError>
type GetCaptchaSuccessType = ReturnType<typeof getCaptchaSuccess>

const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {id, login, email, isAuth}
    } as const

}

const setMessageError = (message: string) => {
    return {
        type: SET_MESSAGE_ERROR,
        payload: {message}
    } as const
}

const getCaptchaSuccess = (captchaUrl: string) => {
    return {
        type: GET_CAPTCHA_SUCCESS,
        payload: {captchaUrl}
    } as const
}


export const getAuthUserData = () => {
    return async (dispatch: Dispatch) => {
        let response = await authAPI.getMe()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    }
}

export const Loginn = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkAction<void, AppStateType, unknown, AppActionsType> => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else if(response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        else {
            dispatch(setMessageError(response.data.messages[0]))
        }
    }
}


export const Logout = (): ThunkAction<void, AppStateType, unknown, AppActionsType> => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(0, '', '', false))
        }
    }
}


export const getCaptcha = () => {
    return async (dispatch: Dispatch) => {
        let response = await securityAPI.getCaptcha()
            dispatch(getCaptchaSuccess(response.data.url))
    }
}
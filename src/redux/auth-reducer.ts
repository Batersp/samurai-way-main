import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppActionsType, AppStateType} from "./redux-store";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_MESSAGE_ERROR = 'SET_MESSAGE_ERROR'

export type InitialStateType = {
    id: number
    login: string
    email: string
    isAuth: boolean
    messageError: string
}

let initialState: InitialStateType = {
    id: 0,
    login: '',
    email: '',
    isAuth: false,
    messageError: ''
}


export const authReducer = (state = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {...state, ...action.payload}
        }

        case "SET_MESSAGE_ERROR": {
            return {...state, messageError: action.payload.message}
        }
        default:
            return state
    }
}

export type AuthReducerActionType = SetAuthUserDataType | SetMessageErrorType
type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
type SetMessageErrorType = ReturnType<typeof setMessageError>

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


export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.getMe()
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}

export const Loginn = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, AppActionsType> => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    dispatch(setMessageError(response.data.messages[0]))
                }
            })
    }
}



export const Logout = (): ThunkAction<void, AppStateType, unknown, AppActionsType> => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setAuthUserData(0, '', '', false))
                }
            })
    }
}
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

export type InitialStateType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: 0,
    login: '',
    email: '',
    isAuth: false
}


export const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {...state, ...action.payload, isAuth: true}
        }
        default:
            return state
    }
}

type ActionType = SetAuthUserDataType
type SetAuthUserDataType = ReturnType<typeof setAuthUserData>

const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {id, login, email}
    } as const

}


export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.getMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}
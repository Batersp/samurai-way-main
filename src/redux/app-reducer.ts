import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppActionsType, AppStateType} from "./redux-store";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}


export const appReducer = (state = initialState, action: AppReducerActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}


export const initializedApp = (): ThunkAction<void, AppStateType, unknown, AppActionsType> => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}


type InitializedSuccessType = ReturnType<typeof initializedSuccess>

export type AppReducerActionType = InitializedSuccessType
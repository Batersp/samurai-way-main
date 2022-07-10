import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {DialogReducerActionType} from "./dialogs-reducer";
import profileReducer, {ProfileReducerActionType} from "./profile-reducer";
import sidebarReducer, {SideBarReducerActionType} from "./sidebar-reducer";
import usersReducer, {UserActionType} from "./users-reducer";
import {authReducer, AuthReducerActionType} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {appReducer, AppReducerActionType} from "./app-reducer";


export type AppStateType = ReturnType<typeof reducers>
export type AppActionsType = DialogReducerActionType
    | ProfileReducerActionType
    | SideBarReducerActionType
    | UserActionType
    | AuthReducerActionType
    | AppReducerActionType

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    NavBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer

})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))
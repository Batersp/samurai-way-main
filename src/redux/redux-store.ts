import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'




export type AppStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    NavBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer

})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))
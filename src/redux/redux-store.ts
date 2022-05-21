import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";




export type AppStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    NavBar: sidebarReducer,
    usersPage: usersReducer

})

export let store = createStore(reducers)
import {usersApi} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS'

export type UsersType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: { small: string, large: string }
}

export type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


const usersReducer = (state = initialState, action: TsarType): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: [...state.users].map(el => el.id === action.payload.id ? {...el, followed: true} : el)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: [...state.users].map(el => el.id === action.payload.id ? {...el, followed: false} : el)
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.payload.users]}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUserCount: action.payload.count}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.payload.pageNumber}
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.payload.isFetching}
        }
        case SET_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.payload.inProgress ? [...state.followingInProgress, action.payload.id]
                    : state.followingInProgress.filter(el => el !== action.payload.id)
            }
        }
        default:
            return state
    }


}


type TsarType =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetTotalUsersCountACType
    | SetCurrentPageACType
    | SetIsFetchingACType
    | SetFollowingInProgressType

type FollowACType = ReturnType<typeof followSuccess>
type UnfollowACType = ReturnType<typeof unfollowSuccess>
type SetUsersACType = ReturnType<typeof setUsers>
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
type SetIsFetchingACType = ReturnType<typeof setIsFetching>
type SetFollowingInProgressType = ReturnType<typeof setFollowingInProgress>

export const followSuccess = (id: number) => {
    return {
        type: FOLLOW,
        payload: {id}
    } as const
}

export const unfollowSuccess = (id: number) => {
    return {
        type: UNFOLLOW,
        payload: {id}
    } as const
}

export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        payload: {users}
    } as const
}

export const setTotalUsersCount = (count: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {count}
    } as const
}

export const setCurrentPage = (pageNumber: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {pageNumber}
    } as const
}

export const setIsFetching = (isFetching: boolean) => {
    return {
        type: SET_IS_FETCHING,
        payload: {isFetching}
    } as const
}

export const setFollowingInProgress = (inProgress: boolean, id: number) => {
    return {
        type: SET_FOLLOWING_IN_PROGRESS,
        payload: {inProgress, id}
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))

            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFollowingInProgress(true, userId))
        usersApi.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(setFollowingInProgress(false, userId))
            })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFollowingInProgress(true, userId))
        usersApi.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(setFollowingInProgress(false, userId))
            })
    }
}


export default usersReducer
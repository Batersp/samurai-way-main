const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export type UsersType = {
    id: number
    name: string
    status: string
    /* location: {city: string, country: string}*/
    followed: boolean
    photos: { small: string, large: string }
}

export type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1
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
        default:
            return state
    }


}


type TsarType = FollowACType | UnfollowACType | SetUsersACType | SetTotalUsersCountACType | SetCurrentPageACType

type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const followAC = (id: number) => {
    return {
        type: FOLLOW,
        payload: {id}
    } as const
}

export const unfollowAC = (id: number) => {
    return {
        type: UNFOLLOW,
        payload: {id}
    } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        payload: {users}
    } as const
}

export const setTotalUsersCountAC = (count: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {count}
    } as const
}

export const setCurrentPageAC = (pageNumber: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {pageNumber}
    } as const
}

export default usersReducer


export type FriendsType = {
    name: string
    url: string
}

export type NavBarType = {
    friends: Array<FriendsType>
}

let initialState: NavBarType = {
    friends: [
        {
            name: 'Barak',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCrV7FtTDbUF7H86lrvKzqoke_02pMmn7cg&usqp=CAU'
        },
        {
            name: 'Ilon',
            url: 'https://kubnews.ru/upload/resize_cache/webp/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.webp'
        },
        {
            name: 'Conor',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpt1uIdn-TOiY_kHCuVGD1BvtJvUiv3YkRkQ&usqp=CAU'
        }
    ]
}

export type SideBarReducerActionType = any

const NavBarReducer = (state = initialState, action: SideBarReducerActionType): NavBarType => {


    return state
}

export default NavBarReducer

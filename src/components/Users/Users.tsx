import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from '../common/Paginator/Paginator'
import {User} from './User'

type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: Array<UsersType>
    followingInProgress: Array<number>
}

export const Users: React.FC<UsersPropsType> = ({
                                                    totalUserCount, pageSize, currentPage, onPageChanged, unfollow
                                                    , follow, users, followingInProgress
                                                }) => {

    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       pageSize={pageSize}
                       totalUserCount={totalUserCount}
            />
            <div>
                {users.map(el => <User key={el.id} user={el} follow={follow} followingInProgress={followingInProgress}
                                       unfollow={unfollow}/>)}
            </div>


        </div>
    )
}
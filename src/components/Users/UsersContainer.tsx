import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {follow, getUsers, setCurrentPage, unfollow, UsersType} from '../../redux/users-reducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";


export type StateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type DispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => any
}

export class UsersApi extends React.Component<StateToPropsType & DispatchToPropsType, AppStateType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       users={this.props.users}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType): StateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*
const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setIsFetching: (isFetcging: boolean) => {
            dispatch(setIsFetchingAC(isFetcging))
        }
    }
}
*/
/*
export const UsersContainer = connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        follow, unfollow,
        setCurrentPage,
        getUsers
    })(UsersApi)*/

export default compose<React.ComponentType>(

    connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps,
        {
            follow, unfollow,
            setCurrentPage,
            getUsers
        })
)
(UsersApi)
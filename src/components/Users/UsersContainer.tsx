import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {follow, requestUsers, setCurrentPage, unfollow, UsersType} from '../../redux/users-reducer';
import React from 'react';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";


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
    requestUsers: (currentPage: number, pageSize: number) => any
}

export class UsersApi extends React.Component<StateToPropsType & DispatchToPropsType, AppStateType> {

    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(

    connect<StateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps,
        {
            follow, unfollow,
            setCurrentPage,
            requestUsers
        })
)
(UsersApi)
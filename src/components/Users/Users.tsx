import React from "react";
import {DispatchToPropsType, StateToPropsType} from "./UsersContainer";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/images.png'
import {AppStateType} from "../../redux/redux-store";


export class Users extends React.Component<StateToPropsType & DispatchToPropsType, AppStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = []
        for(let i = 1; i <= pagesCount; i++ ) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map((el, index) => {
                        return <span key={index}
                                     className={this.props.currentPage === el? style.selectedPage: ''}
                        onClick={() => this.onPageChanged(el)}>{el}</span>
                    })}
                </div>
                <div>
                    {this.props.users.map(el => <div className={style.main} key={el.id}>
                        <div className={style.ava_btn}>
                            <img className={style.photo} src={el.photos.small != null ? el.photos.small : userPhoto}/>
                            <div> {el.followed
                                ? <button className={style.btn} onClick={() => {
                                    this.props.unfollow(el.id)
                                }}>Unfollow</button>
                                : <button className={style.unbtn} onClick={() => {
                                    this.props.follow(el.id)
                                }}>Follow</button>
                            }</div>
                        </div>
                        <div className={style.second}>
                            <div className={style.name_status}>
                                <div className={style.name}>{el.name}</div>
                                <div className={style.status}>{el.status}</div>
                            </div>
                            <div className={style.location}>
                                <div className={style.country}>{'location.country'}</div>
                                <div className={style.city}>{'location.city'}</div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}


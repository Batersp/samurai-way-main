import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Logout} from "../../redux/auth-reducer";

type HeaderPropsType = {
    login: string
    isAuth: boolean
}


export const Header = (props: HeaderPropsType) => {

    const dispatch = useDispatch()

    const onLogoutClickHandler = () => {
        dispatch(Logout())
    }

    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/ru/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png'/>
            <div className={s.loginBlock}>
                {props.isAuth
                ? <div> <button onClick={onLogoutClickHandler}>Logout</button> {props.login} </div>
                : <NavLink to='/login'>Login</NavLink>}

            </div>
        </header>
    )
}
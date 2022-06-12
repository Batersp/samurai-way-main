import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    isAuth: boolean
}


export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/ru/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png'/>
            <div className={s.loginBlock}>
                {props.isAuth
                ? props.login
                : <NavLink to='/login'>Login</NavLink>}

            </div>
        </header>
    )
}
import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'
import {SideBarType} from "../../redux/state";
import {Friends} from "./Friends/Friends";

type NavbarType = {
    sideBar: SideBarType
}

export const Navbar = (props:NavbarType) => {

    let friendsElement = props.sideBar.friends.map(el => <Friends name={el.name} url={el.url}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div>
                <h2>My Friends</h2>
                {friendsElement}
            </div>





        </nav>
    )
}
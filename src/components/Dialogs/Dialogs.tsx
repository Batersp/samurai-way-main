import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to='/dialogs/1' activeClassName={s.active}>Arteta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={s.active}>Bentdner</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={s.active}>Rio Miyachi</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Who want play against Barselona?
                </div>
                <div className={s.message}>
                    I can, but whats is Barselona?
                </div>
                <div className={s.message}>
                    i got you coach, i dont
                </div>
            </div>
        </div>
    )
}